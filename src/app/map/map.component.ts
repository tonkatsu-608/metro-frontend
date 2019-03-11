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
  sites = 100;
  loading = false;
  metro: any;
  mode: string;
  isSave: boolean;
  isUser: boolean;
  currentMap: Map;
  currentUser: User;
  canvas: HTMLCanvasElement;
  cursorCanvas: HTMLCanvasElement;

  increment = 15;
  waterline = 0.15;
  isIncreasing = true;
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
    // this.route.params.subscribe(params => {
    //   this.userService.getMap(params['id'])
    //     .subscribe(
    //       data => {
    //         this.currentMap = data;
    //         this.canvas = d3.select("#myCanvas").node();
    //         if(data.data) {
    //           this.metro = new Metro(this.canvas, data.data);
    //         } else {
    //           this.metro = new Metro(this.canvas);
    //         }
    //       },
    //       error => {
    //         this.loading = false;
    //         this.snackBar.open(error.error.error, "OK", {
    //           duration: 4000
    //         });
    //       });
    // });
  }

  elevationSwitchOnChange(elememt) {
    console.log("elevationSwitchOnChange: ", elememt.checked);
  }

  incrementOnChange(elememt) {
    console.log("incrementOnChange: ", elememt.value);
  }

  waterlineOnChange(elememt) {
    console.log("waterlineOnChange: ", elememt.value);
  }

  saveMap() {
    this.loading = true;

    let map = new Map();
    map.id = this.currentMap.id;
    map.uid = this.currentMap.uid;
    map.name = this.currentMap.name;
    map.img = this.canvas.toDataURL();
    map.data = this.convertGraphics2Object(this.metro.graphics);
    map.editDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
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
      segment: graphics.SEGMENT,
      distance: graphics.DISTANCE,
      sites: graphics.sites,
      diagram: processDiagram(graphics.diagram),
      links: graphics.links,
      edges: graphics.edges.map( processEdge ),
      polygons: graphics.polygons,
      clusters: graphics.clusters,
      buildings: graphics.buildings,
      vertices: graphics.vertices.map( processVertex ),
    };
    console.log("saving...", data);

    return data;

    function processDiagram(diagram) {
      diagram.edges = diagram.edges.map( processEdge );
      diagram.cells = diagram.cells.map( cell => {
          return {
            halfedges: cell.halfedges,
            site: {
              x: cell.site[0],
              y: cell.site[1],
              index: cell.site.index,
              data:  cell.site.data,
            },
          };
        });
      
      return diagram;
    }

    function processEdge(e) {
      if(e === null || e === undefined) return;

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
              x: graphics.sites[ e.left.index ][0],
              y: graphics.sites[ e.left.index ][1],
              index: e.left.index,
          },
          right: e.right ? {
            x: graphics.sites[ e.right.index ][0],
            y: graphics.sites[ e.right.index ][1],
            index: e.right.index,
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
  }

  newGraphics(sites) {
    this.metro.newGraphics(sites);
  }

  changeSimulating() {
    if(this.isSimulatingSelected) {
      this.metro.restartSimulations();
    } else {
      this.metro.stopSimulations();
    }
  }

  changeSingle() {
    if(this.isSingleSelected) {
      this.metro.startSingleDragMode();
    } else {
      this.metro.stopSingleDragMode();
    }
  }

  changeWarp() {
    if(this.isWarpSelected) {
      this.isSingleSelected = false;
      this.isSimulatingSelected = false;
      this.metro.stopSingleDragMode();
      this.metro.startWarpMode();
    } else {
      this.metro.stopWarpMode();
    }
  }

  changeEdges() {
    this.metro.changeEdges(this.distance, this.segment);
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