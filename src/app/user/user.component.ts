import { Component, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { MapService } from '../_service/map.service';
import { AuthenticationService } from '../_service/authentication.service';

export interface DialogData {
  mapName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  mapName: string;
  maps: Map[] = [];
  currentUser: User;
  currentUserSubscription: Subscription;
  displayedColumns: string[] = ['name', 'img', 'createDate', 'editDate', 'operation'];
  dataSource: MatTableDataSource<Map>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.userService.getMaps(this.currentUser._id).subscribe(data => {
      this.maps = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateMapDialog, {
      width: '250px',
      data: { mapName: this.mapName }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapName = result;
    });
  }

  editMap(mapName): void {
    let map = new Map();
    for (let i = 0; i < this.maps.length; i++) {
      if (this.maps[i].name === mapName) {
        map = this.maps[i];
        break;
      }
    }
    this.mapService.setCurrentMap2LocalStorage(map);
    this.router.navigate(['/map'], { queryParams: { mapName: map.name, mode: 'edit' } });
  }
}

@Component({
  selector: 'create-map-dialog',
  templateUrl: 'create-map-dialog.html',
})
export class CreateMapDialog {
  loading: boolean = false;
  isValue: boolean = false;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<CreateMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.router.navigate(['/map'], { queryParams: { mapName: this.data.mapName, mode: 'create' } });
  }
}