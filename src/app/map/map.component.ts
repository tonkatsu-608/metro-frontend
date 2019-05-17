import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { saveAs } from 'file-saver';
import 'rxjs/add/operator/filter';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { MapService } from '../_service/map.service';
import { ComponentCanDeactivate } from '../_guard/map.guard';
import { AuthenticationService } from '../_service/authentication.service';

declare const d3: any;
declare const Metro: any;

export interface OperationSheetData {
  metro: any,
  canvas: any,
  currentMap: any,
  currentUser: any,
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  metro: any;
  mode: string;
  loading = false;
  isUser: boolean;
  isSaved: boolean;
  currentMap: Map;
  currentUser: User;
  mapWithoutData: any;
  currentUserSubscription: Subscription;

  canvas: HTMLCanvasElement;
  cursorCanvas: HTMLCanvasElement;

  // map settings
  sites = 128;
  VIEW_MODES = new Set(['elevation']);
  EDIT_MODES = new Set();
  elevation_view_checked = true;
  affluence_view_checked = false;
  desirability_view_checked = false;
  district_view_checked = false;
  building_view_checked = false;

  elevation_edit_checked = false;
  affluence_edit_checked = false;
  desirability_edit_checked = false;
  district_edit_checked = false;
  building_edit_checked = false;

  constructor(
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private mapService: MapService,
    private userService: UserService,
    private bottomSheet: MatBottomSheet,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.currentMap = new Map();
    this.route.params.subscribe(params => {
      this.mapService.getMap(params['id'])
        .subscribe(
          data => {
            this.currentMap = data;
            this.mapWithoutData = {
              id: data.id,
              uid: data.uid,
              name: data.name,
              isVisible: data.isVisible,
              createDate: data.createDate,
              editDate: data.editDate,
            }
            this.userService.getUser(this.currentMap.uid).subscribe(user => {
              this.mapWithoutData.firstname = user.firstname || '';
              this.mapWithoutData.lastname = user.lastname || '';
              this.mapWithoutData.email = user.email || '';
              this.mapWithoutData.avatar = user.avatar || '';
            });
            this.canvas = d3.select("#myCanvas").node();
            this.cursorCanvas = d3.select("#cursorCanvas").node();
            if (data.data) {
              this.metro = new Metro(this.canvas, this.cursorCanvas, data.data);
            } else {
              this.metro = new Metro(this.canvas, this.cursorCanvas);
            }
          },
          error => {
            this.loading = false;
            this.snackBar.open(error.error.error, "OK", {
              duration: 4000
            });
          });
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  // resize map
  Resize() {
    this.metro.state.transform.x = 0;
    this.metro.state.transform.y = 0;
    this.metro.state.transform.k = 1;
    this.metro.render();
  }

  // new graphics
  newGraphics() {
    this.metro.graphics = this.metro.newGraphics(this.sites);
  }

  // onChange event of view-check-box elements
  checkboxOnChange(element, type) {
    let isChecked = element.checked;
    let layerName = element.source.id.slice(0, element.source.id.indexOf('-'));

    // change map's layers
    this.metro.checkboxOnChange(type, layerName, isChecked);

    // change dom element
    this.changeModes(type, layerName, isChecked, element);
  }

  // onChange event of viewLayer + editLayer
  changeModes(type, layerName, isChecked, element) {
    if (type === 'view') {
      if (isChecked) {
        this.VIEW_MODES.add(layerName);
      } else {
        if (this.VIEW_MODES.size === 1) {
          element.checked = true;
          return;
        } else if (this.VIEW_MODES.has(layerName)) {
          this.EDIT_MODES.delete(layerName);
          this.VIEW_MODES.delete(layerName);
          switch (layerName) {
            case 'elevation': this.elevation_edit_checked = false; break;
            case 'affluence': this.affluence_edit_checked = false; break;
            case 'desirability': this.desirability_edit_checked = false; break;
            case 'district': this.district_edit_checked = false; break;
            case 'building': this.building_edit_checked = false; break;
          }
        }
      }
    } else {
      if (isChecked) {
        this.VIEW_MODES.add(layerName);
        this.EDIT_MODES.add(layerName);
        switch (layerName) {
          case 'elevation': this.elevation_view_checked = true; break;
          case 'affluence': this.affluence_view_checked = true; break;
          case 'desirability': this.desirability_view_checked = true; break;
          case 'district': this.district_view_checked = true; break;
          case 'building': this.building_view_checked = true; break;
        }
      } else {
        this.EDIT_MODES.delete(layerName);
      }
    }
  }

  // show contour line
  showContourLine() {
    this.metro.drawContourLine();
  }

  // show street names
  streetNameSwitchOnChange(element) {
    this.metro.streetNameSwitchOnChange(!element.checked);
  }

  // onChange event of elevation switch
  elevationSwitchOnChange(element) {
    this.metro.elevationSwitchOnChange(element.checked);
  }

  // onChange event of increment slider
  incrementSliderOnChange(element) {
    this.metro.incrementSliderOnChange(element.value);
  }

  // onChange event of waterline slider
  waterLineSliderOnChange(element) {
    this.metro.waterLineSliderOnChange(element.value);
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetOperationSheet, {
      data: {
        isSaved: this.isSaved,
        metro: this.metro,
        canvas: this.canvas,
        currentMap: this.currentMap,
        currentUser: this.currentUser,
      },
    });
    bottomSheetRef.afterDismissed().subscribe(result => {
      if (!result) {
        this.isSaved = false;
      } else {
        this.isSaved = result.isSaved;
      }
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.newGraphics();
    }
  }

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    if (this.isSaved) {
      return true;
    } else {
      return false;
    }
  }
}

@Component({
  selector: 'bottom-sheet-operation-sheet',
  templateUrl: 'bottom-sheet-operation-sheet.html',
})
export class BottomSheetOperationSheet implements OnInit {
  loading: boolean;
  isOwner = false;
  CanvasToBMP = {
    /**
     * Convert a canvas element to ArrayBuffer containing a BMP file
     * with support for 32-bit (alpha).
     *
     * Note that CORS requirement must be fulfilled.
     *
     * @param {HTMLCanvasElement} canvas - the canvas element to convert
     * @return {ArrayBuffer}
     */
    toArrayBuffer: function (canvas) {
      let w = canvas.width,
        h = canvas.height,
        w4 = w * 4,
        idata = canvas.getContext("2d").getImageData(0, 0, w, h),
        data32 = new Uint32Array(idata.data.buffer), // 32-bit representation of canvas

        stride = Math.floor((32 * w + 31) / 32) * 4, // row length incl. padding
        pixelArraySize = stride * h,                 // total bitmap size
        fileLength = 122 + pixelArraySize,           // header size is known + bitmap

        file = new ArrayBuffer(fileLength),          // raw byte buffer (returned)
        view = new DataView(file),                   // handle endian, reg. width etc.
        pos = 0, x, y = 0, p, s = 0, a, v;

      // write file header
      setU16(0x4d42);          // BM
      setU32(fileLength);      // total length
      pos += 4;                // skip unused fields
      setU32(0x7a);            // offset to pixels

      // DIB header
      setU32(108);             // header size
      setU32(w);
      setU32(-h >>> 0);        // negative = top-to-bottom
      setU16(1);               // 1 plane
      setU16(32);              // 32-bits (RGBA)
      setU32(3);               // no compression (BI_BITFIELDS, 3)
      setU32(pixelArraySize);  // bitmap size incl. padding (stride x height)
      setU32(2835);            // pixels/meter h (~72 DPI x 39.3701 inch/m)
      setU32(2835);            // pixels/meter v
      pos += 8;                // skip color/important colors
      setU32(0xff0000);        // red channel mask
      setU32(0xff00);          // green channel mask
      setU32(0xff);            // blue channel mask
      setU32(0xff000000);      // alpha channel mask
      setU32(0x57696e20);      // " win" color space

      // bitmap data, change order of ABGR to BGRA
      while (y < h) {
        p = 0x7a + y * stride; // offset + stride x height
        x = 0;
        while (x < w4) {
          v = data32[s++];                     // get ABGR
          a = v >>> 24;                        // alpha channel
          view.setUint32(p + x, (v << 8) | a); // set BGRA
          x += 4;
        }
        y++
      }
      return file;

      // helper method to move current buffer position
      function setU16(data) { view.setUint16(pos, data, true); pos += 2 }
      function setU32(data) { view.setUint32(pos, data, true); pos += 4 }
    },

    /**
     * Converts a canvas to BMP file, returns a Blob representing the
     * file. This can be used with URL.createObjectURL().
     * Note that CORS requirement must be fulfilled.
     *
     * @param {HTMLCanvasElement} canvas - the canvas element to convert
     * @return {Blob}
     */
    toBlob: function (canvas) {
      return new Blob([this.toArrayBuffer(canvas)], {
        type: "image/bmp"
      });
    },

    /**
     * Converts the canvas to a data-URI representing a BMP file.
     * Note that CORS requirement must be fulfilled.
     *
     * @param canvas
     * @return {string}
     */
    toDataURL: function (canvas) {
      var buffer = new Uint8Array(this.toArrayBuffer(canvas)),
        bs = "", i = 0, l = buffer.length;
      while (i < l) bs += String.fromCharCode(buffer[i++]);
      return "data:image/bmp;base64," + btoa(bs);
    }
  };

  constructor(
    public snackBar: MatSnackBar,
    private mapService: MapService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: OperationSheetData,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOperationSheet>) { }

  ngOnInit() {
    if (this.data.currentMap.uid !== this.data.currentUser.id) {
      this.isOwner = false;
    } else {
      this.isOwner = true;
    }
  }

  dismiss(isSaved): void {
    this.bottomSheetRef.dismiss({ isSaved: isSaved });
    event.preventDefault();
  }

  downloadMap(format) {
    const
      name = this.data.currentMap.name,
      offsetX = this.data.metro.state.transform.x,
      offsetY = this.data.metro.state.transform.y,
      realZoomFactor = this.data.metro.state.transform.k,
      realCanvas = this.data.metro.state.canvas,
      fakeCanvas = document.createElement('canvas');
    fakeCanvas.width = this.data.metro.state.width() * this.data.metro.state.ZOOM_FACTOR.max;
    fakeCanvas.height = this.data.metro.state.height() * this.data.metro.state.ZOOM_FACTOR.max;
    // let fakeCanvas: any = new OffscreenCanvas(this.data.metro.state.width() * 4, this.data.metro.state.height() * 4);
    // let gl = fakeCanvas.getContext('2d');
    // const fakeCanvasContext = fakeCanvas.getContext('2d');
    // fakeCanvasContext.drawImage(this.data.metro.state.canvas, 0, 0);

    this.data.metro.state.transform.x = 0;
    this.data.metro.state.transform.y = 0;
    this.data.metro.state.transform.k = this.data.metro.state.ZOOM_FACTOR.max;
    this.data.metro.state.canvas = fakeCanvas;
    document.body.appendChild(fakeCanvas);
    this.data.metro.render();
    document.body.removeChild(fakeCanvas);
    // const blob = fakeCanvas.convertToBlob({
    //   type: "image/jpeg",
    //   quality: 1
    // });
    // saveAs(blob, name);
    this.data.metro.state.canvas.toBlob(blob => {
      saveAs(blob, name);
    });
    // this.saveCanvasAs(this.data.canvas, format);
    // this.saveImageURL( this.data.canvas, format);
    this.data.metro.state.transform.x = offsetX;
    this.data.metro.state.transform.y = offsetY;
    this.data.metro.state.transform.k = realZoomFactor;
    this.data.metro.state.canvas = realCanvas;

    // let arrayBuffer = this.CanvasToBMP.toArrayBuffer(this.data.canvas);
    // saveAs(new Blob([arrayBuffer], { type: "image/png" }), this.data.currentMap.name, true);
    this.dismiss(false);
  }

  saveImageURL(canvas, format) {
    canvas.toBlob(blob => {
      let imageObj = new Image();
      let url = URL.createObjectURL(blob);
      imageObj.crossOrigin = 'anonymous';
      imageObj.onload = function () {
        // no longer need to read the blob so it's revoked
        canvas.getContext('2d').drawImage(imageObj, 0, 10);
        URL.revokeObjectURL(url);
      };
      this.download(url);
    });
  }

  saveCanvasAs(canvas, format) {
    //// get image data and transform mime type to application/octet-stream
    // let canvasDataUrl = canvas.toDataURL({
    //   format: format,
    //   multiplier: this.data.metro.state.ZOOM_FACTOR.max
    // }, 1.0)
    let bitmap = canvas.transferToImageBitmap();
    let url = URL.createObjectURL(bitmap);
    // let canvasDataUrl = bitmap.toString('base64');
    // let canvasDataUrl = canvas.toDataURL(format, 1.0);
    this.download(url);
  }

  download(url) {
    let link = document.createElement('a'); // create an anchor tag
    // set parameters for downloading
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('download', this.data.currentMap.name + '.' + 'blob');

    // compat mode for dispatching click on your anchor
    if (document.createEvent) {
      let evtObj = document.createEvent('MouseEvents');
      evtObj.initEvent('click', true, true);
      link.dispatchEvent(evtObj);
    } else if (link.click) {
      link.click();
    }
  }

  saveMap() {
    this.loading = true;

    let map = new Map();
    map.id = this.data.currentMap.id;
    map.uid = this.data.currentMap.uid;
    map.name = this.data.currentMap.name;
    map.img = this.data.canvas.toDataURL();
    map.isVisible = this.data.currentMap.isVisible;
    map.data = this.convertGraphics2Object(this.data.metro.graphics);
    map.editDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    // console.log("saving map...", map);

    this.mapService.saveMap(map, map.id)
      .subscribe(
        () => {
          this.loading = false;
          this.snackBar.open("save map successfully", "OK", {
            duration: 4000
          });
          this.dismiss(true);
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.error, "OK", {
            duration: 4000
          });
          this.dismiss(false);
        });
  }

  convertGraphics2Object(graphics) {
    let data = {
      currentCastle: graphics.currentCastle,
      sites: graphics.sites.map(processSite),
      edges: graphics.edges.map(processEdge),
      links: graphics.links.map(processLink),
      triangles: graphics.triangles.map(t => t.map(processSite)),
      polygons: graphics.polygons.map(stringify),
      vertices: graphics.vertices.map(processVertex),
    };

    return data;

    function processLink(l) {
      return {
        source: processSite(l.source),
        target: processSite(l.target),
      }
    }

    // convert site to object
    function processSite(s) {
      return {
        x: s[0],
        y: s[1],
        type: s.type,
        wall: s.wall,
        index: s.index,
        color: s.color,
        delta: s.delta,
        elevation: s.elevation,
        affluence: s.affluence,
        isBoundary: s.isBoundary,
        desirability: s.desirability,
      };
    }

    // convert edge to object
    function processEdge(e) {
      if (e === null || e === undefined || !e[0] || !e[1]) return;

      return {
        startPoint:
        {
          x: e[0][0],
          y: e[0][1],
          vertexIndex: e[0].vertexIndex || null,
          edgeIndex: e[0].edgeIndex || null,
        },
        endPoint:
        {
          x: e[1][0],
          y: e[1][1],
          vertexIndex: e[1].vertexIndex || null,
          edgeIndex: e[1].edgeIndex || null,
        },
        left: e.left,
        right: e.hasOwnProperty('right') && e.right !== null ? e.right : null,
      }
    }

    // convert vertex to object
    function processVertex(v) {
      return {
        x: v[0],
        y: v[1],
        edgeIndex: v.edgeIndex,
        vertexIndex: v.vertexIndex,
      };
    }

    // convert polygon to string
    function stringify(obj) {
      if (obj === undefined) {
        obj = [];
      }

      let type = typeof obj;

      if (type === 'string') {
        return '"' + obj + '"';

      } else if (type === 'number' || type === 'undefined' || type === 'boolean') {
        return obj + '';
      }

      let kv = [];

      for (let prop in obj) {
        kv.push(stringify(prop) + ':' + stringify(obj[prop]));
      }

      if (Array.isArray(obj)) {
        kv.push('"length":' + obj.length);
      }

      return "{" + kv.join(',') + '}';
    }
  }
}