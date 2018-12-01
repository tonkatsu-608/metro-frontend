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
  loading = false;
  submitted = false;
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
            if(data.sites.length === 0 && data.clusters.length === 0) {
              this.metro = new Metro(this.canvas);
            } else {
              this.metro = new Metro(this.canvas, data.sites, data.clusters);
            }
          },
          error => {
            this.loading = false;
            this.snackBar.open(error.error.error, "OK", {
              duration: 5000
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
    map.sites = this.metro.graphics.sites;
    map.clusters = this.metro.graphics.clusters;
    map.editDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.userService.saveMap(map)
      .subscribe(
        data => {
          this.loading = false;
          this.isSave = true;
          this.snackBar.open("Save successfully!", "OK", {
            duration: 5000
          });
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.error, "OK", {
            duration: 5000
          });
        });
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