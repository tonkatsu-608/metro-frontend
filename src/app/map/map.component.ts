import { Component, OnInit, HostListener } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { ComponentCanDeactivate } from '../_guard/map.guard';

declare const d3: any;
declare const Metro: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, ComponentCanDeactivate {
  metro: any;
  mode: string;
  isSave: boolean;
  isUser: boolean;
  loading = false;
  currentMap: Map;
  currentUser: User;
  canvas: HTMLCanvasElement;
  cursorCanvas: HTMLCanvasElement;

  // map settings
  sites = 100;
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
    private userService: UserService) { }

  ngOnInit() {
    this.currentMap = new Map();
    this.route.params.subscribe(params => {
      this.userService.getMap(params['id'])
        .subscribe(
          data => {
            this.currentMap = data;
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

  // new graphics
  newGraphics() {
    this.metro.newGraphics(this.sites);
  }

  // draw contour line
  drawContourLine() {
    this.metro.drawContourLine();
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
            case 'district': this.desirability_edit_checked = false; break;
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

  // onChange event of elevation switch
  elevationSwitchOnChange(elememt) {
    this.metro.elevationSwitchOnChange(elememt.checked);
  }

  // onChange event of increment slider
  incrementSliderOnChange(elememt) {
    this.metro.incrementSliderOnChange(elememt.value);
  }

  // onChange event of waterline slider
  waterLineSliderOnChange(elememt) {
    this.metro.waterLineSliderOnChange(elememt.value);
  }

  saveMap() {
    this.loading = true;

    let map = new Map();
    map.id = this.currentMap.id;
    map.uid = this.currentMap.uid;
    map.name = this.currentMap.name;
    map.img = this.canvas.toDataURL();
    map.data = this.convertGraphics2Object(this.metro.graphics);
    // map.data = this.convertGraphics2Object(this.metro.graphics);
    map.editDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    console.log("saving map...", map);
    this.userService.saveMap(map)
      .subscribe(
        data => {
          this.loading = false;
          this.isSave = true;
          this.snackBar.open("Save successfully!", "OK", {
            duration: 4000
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.error, "OK", {
            duration: 4000
          });
        });
  }

  convertGraphics2Object(graphics) {
    let data = {
      sites: graphics.sites.map(processSite),
      diagram: processDiagram(graphics.diagram),
      edges: graphics.edges.map(processEdge),
      links: graphics.links,
      triangles: graphics.triangles.map(t => t.map(processSite)),
      polygons: graphics.polygons.map(processPolygon),
      vertices: graphics.vertices.map(processVertex),
    };
    console.log("saving...", data);

    return data;

    function processDiagram(diagram) {
      diagram.edges = diagram.edges.map(processEdge);
      diagram.cells = diagram.cells.map(cell => {
        return {
          halfedges: cell.halfedges,
          site: {
            x: cell.site[0],
            y: cell.site[1],
            index: cell.site.index,
            data: cell.site.data,
          },
        };
      });

      return diagram;
    }
    function processSite(s) {
      return {
        x: s[0],
        y: s[1],
        type: s.type,
        wall: s.wall,
        index: s.index,
        color: s.color,
        elevation: s.elevation,
        affluence: s.affluence,
        isBoundary: s.isBoundary,
        desirability: s.desirability,
      };
    }

    function processEdge(e) {
      if (e === null || e === undefined) return;

      return {
        startPoint:
        {
          vertexIndex: e[0].vertexIndex,
          edgeIndex: e[0].edgeIndex,
        },
        endPoint:
        {
          vertexIndex: e[1].vertexIndex,
          edgeIndex: e[1].edgeIndex,
        },
        left: {
          x: graphics.sites[e.left.index][0],
          y: graphics.sites[e.left.index][1],
          index: e.left.index,
          data: e.left.data,
        },
        right: e.right ? {
          x: graphics.sites[e.right.index][0],
          y: graphics.sites[e.right.index][1],
          index: e.right.index,
          data: e.right.data,

        } : null,
      }
    }

    function processVertex(v) {
      return {
        x: v[0],
        y: v[1],
        edgeIndex: v.edgeIndex,
        vertexIndex: v.vertexIndex,
      };
    }

    function processPolygon(p) {
      if (p === null || p === undefined) return;

      let poly = {
        area: p.area,
        index: p.index,
        edges: p.edges,
        center: p.center,
        vertices: p.vertices,
        isBoundary: p.isBoundary,
        buildings: null,
        subPolygons: null,
    };

    if(p.building) {
    }

      return poly;
    }
  }

  // @HostListener allows us to also guard against browser refresh, close, etc.
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    if (this.isSave) {
      return true;
    } else {
      return false;
    }
  }

}