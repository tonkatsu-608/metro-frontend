import { Component, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { MapService } from '../_service/map.service';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';

export interface DialogData {
  id: string;
  uid: string;
  mapName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  id: string;
  mapName: string;
  maps: Map[] = null;
  currentUser: User;
  currentUserSubscription: Subscription;
  displayedColumns: string[] = ['name', 'img', 'createDate', 'editDate', 'isVisible', 'operation'];
  dataSource: MatTableDataSource<Map>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.refresh();
    this.refresh();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isVisibleOnChange(row, element): void {
    this.loading = true;

    let map = new Map();
    map.id = row.id;
    map.isVisible = element.checked;
    this.mapService.saveMap(map, map.id)
      .subscribe(
        () => {
          this.loading = false;
          this.snackBar.open("update map successfully", "OK", {
            duration: 2000
          });
          this.refresh();
        },
        error => {
          this.loading = false;
          this.snackBar.open(error.error.error, "OK", {
            duration: 2000
          });
          this.refresh();
        });
  }

  editMap(id): void {
    this.router.navigate(['/map/' + id]);
  }

  openDeleteDialog(id, name): void {
    const dialogRef = this.dialog.open(DeleteMapDialog, {
      width: '320px',
      data: { mapName: name, id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapName = result;
      this.refresh();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateMapDialog, {
      width: '250px',
      data: { mapName: this.mapName, uid: this.currentUser.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapName = result;
      this.refresh();
    });
  }

  refresh(): void {
    this.userService.getMaps(this.currentUser.id).subscribe(data => {
      this.maps = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

/*=====================================================================================================
                                            Delete Map
======================================================================================================*/
@Component({
  selector: 'delete-map-dialog',
  templateUrl: 'delete-map-dialog.html',
})
export class DeleteMapDialog {
  loading: boolean = false;

  constructor(
    private mapService: MapService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.loading = true;
    this.mapService.deleteMap(this.data.id)
      .subscribe(
        data => {
          this.loading = false;
          this.snackBar.open(this.data.mapName + " delete successfully", "OK", {
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
}

/*=====================================================================================================
                                            Create Map
======================================================================================================*/
@Component({
  selector: 'create-map-dialog',
  templateUrl: 'create-map-dialog.html',
})
export class CreateMapDialog {
  loading: boolean;

  constructor(
    private router: Router,
    private mapService: MapService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.loading = true;
    let createDate = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');
    let map = new Map();

    map.uid = this.data.uid;
    map.name = this.data.mapName;
    map.createDate = createDate;
    map.editDate = createDate;
    map.isVisible = false;
    map.img = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="; // The Tiniest Gif Ever

    this.mapService.createMap(map)
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/map/' + data]);
          this.snackBar.open(this.data.mapName + " created successfully", "OK", {
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
}