import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';


import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';

declare const d3: any;
declare var Blob: {
  prototype: Blob;
  new(): Blob;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  loading = false;
  submitted = false;
  metro: any;
  isUser: boolean;
  currentMap: Map;
  currentUser: User;
  currentUserSubscription: Subscription;
  canvas: HTMLCanvasElement = d3.select("canvas");

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.role === 'user') { this.isUser = true; } else { this.isUser = false; }
    });
  }

  ngOnInit() {
    this.metro = new Metro(this.canvas);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  saveMap() {
    if (this.currentUser.role === 'user') {
      this.loading = true;
      this.userService.createMap({
        uid: this.currentUser._id,
        name: "Map1",
        img: "",
        data: {
          sites: this.metro.graphics.sites,
          clusters: this.metro.graphics.clusters
        }
      })
        .pipe(first())
        .subscribe(
          data => {
            this.loading = false;
            this.snackBar.open("Save successfully!", "OK", {
              duration: 5000
            });
          },
          error => {
            this.loading = false;
            this.snackBar.open(error.error, "OK", {
              duration: 5000
            });
          });
    }
  }

  // getImgURL() {
  //   var url = "";
  //   console.log(this.canvas.width);
  //   console.log(this.canvas.height);

  //   this.canvas.toBlob(function (blob) {
  //     url = (URL || webkitURL).createObjectURL(blob);
  //   });
  //   console.log("url: ", url);
  // }
}