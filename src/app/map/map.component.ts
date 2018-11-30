import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';
import { MapService } from '../_service/map.service';
import { ComponentCanDeactivate } from '../_guard/map.guard';

declare const d3: any;
declare const Metro: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  loading = false;
  submitted = false;
  metro: any;
  mode: string;
  isSave: boolean;
  isUser: boolean;
  mapName: string;
  currentMap: Map;
  currentUser: User;
  canvas: HTMLCanvasElement;
  currentMapSubscription: Subscription;
  currentUserSubscription: Subscription;

  constructor(
    public snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.mode)
      .subscribe(params => {
        this.mode = params.mode;
      });
    this.route.queryParams
      .filter(params => params.mapName)
      .subscribe(params => {
        this.mapName = params.mapName;
      });
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.role === 'user') { this.isUser = true; } else { this.isUser = false; }
    });
    this.currentMapSubscription = this.mapService.currentMap.subscribe(map => {
      this.currentMap = map;
    });
    this.canvas = d3.select("#myCanvas").node();
    if (this.mode === 'create') {
      this.currentMap = new Map();
      this.metro = new Metro(this.canvas, null, null);
    } else if (this.mode === 'edit' && this.currentMap) {
      this.metro = new Metro(this.canvas, this.currentMap.sites, this.currentMap.clusters);
    }
  }

  ngOnDestroy() {
    this.mapService.removeCurrentMapFormLocalStorage();
    // unsubscribe to ensure no memory leaks
    this.currentMapSubscription.unsubscribe();
    this.currentUserSubscription.unsubscribe();
  }

  saveMap() {
    this.loading = true;
    let createDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    let map = new Map();
    if(this.mode === 'edit') {
      map.id = this.currentMap.id;
    }
    map.uid = this.currentUser.id;
    map.img = this.imgURL;
    map.sites = this.metro.graphics.sites;
    map.clusters = this.metro.graphics.clusters;
    map.createDate = createDate;
    map.editDate = createDate;
    map.name = this.mapName;
    this.userService.saveMap(map, this.mode)
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

  get imgURL() {
    return this.canvas.toDataURL();
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