import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { formatDate } from '@angular/common';

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
  isSave: boolean;
  isUser: boolean;
  currentMap: Map;
  currentUser: User;
  currentUserSubscription: Subscription;
  canvas: HTMLCanvasElement = d3.select("#myCanvas");

  constructor(
    public snackBar: MatSnackBar,
    private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.role === 'user') { this.isUser = true; } else { this.isUser = false; }
    });

    this.currentUserSubscription = this.mapService.currentMap.subscribe(map => {
      this.currentMap = map;
    });
  }

  ngOnInit() {
    this.metro = new Metro(this.canvas, this.currentMap ? this.currentMap.sites : null, this.currentMap ? this.currentMap.clusters : null);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  saveMap() {
    this.loading = true;
    let createDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    let map = {
      uid: this.currentUser._id,
      name: "map1",
      img: "img_URL",
      sites: this.metro.graphics.sites,
      clusters: this.metro.graphics.clusters,
      createDate: createDate,
      editDate: createDate
    }
    this.userService.createMap(map)
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

  get ImgURL() {
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