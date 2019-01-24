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
  sites = 30;
  segment = 20;
  distance = 150;
  isSimulatingSelected = false;
  isSingleSelected = false;
  isWarpSelected = false;
  loading = false;
  metro: any;
  mode: string;
  isSave: boolean;
  isUser: boolean;
  currentMap: Map;
  currentUser: User;
  canvas: HTMLCanvasElement;

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
            if(data.graphics !== null) {
              this.metro = new Metro(this.canvas, data.graphics);
            } else {
              this.metro = new Metro(this.canvas);
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

  saveMap() {
    this.loading = true;

    let map = new Map();
    map.id = this.currentMap.id;
    map.uid = this.currentMap.uid;
    map.name = this.currentMap.name;
    map.img = this.canvas.toDataURL();
    map.graphics = this.convertGraphics2Object(this.metro.graphics);
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
    if(graphics.edges.length !== 0) {
      graphics.edges = graphics.edges.map( this.makeEdge );
    }
    console.log("saving...", graphics);

    return graphics;
  }

  makeEdge(e) {
    let edge = {
        startPoint: { x: e[0][0], y: e[0][1] },
        endPoint: { x: e[1][0], y: e[1][1] },
        left: {
            x: e.left[0],
            y: e.left[1],
            index: e.left.index,
            data: e.left.data
        },
        right: null,
    }

    if(e.right) {
        edge.right = {
            x: e.right[0],
            y: e.right[1],
            index: e.right.index,
            data: e.right.data
        };
    }
    return edge;
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