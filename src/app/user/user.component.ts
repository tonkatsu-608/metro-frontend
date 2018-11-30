import { Component, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { MapService } from '../_service/map.service';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';

export interface DialogData {
  id: string;
  mapName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  id: string;
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
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
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

  editMap(mapName): void {
    const map = this.findMapById(mapName);
    this.mapService.setCurrentMap2LocalStorage(map);
    this.router.navigate(['/map'], { queryParams: { mapName: map.name, mode: 'edit' } });
  }

  openDeleteDialog(mapName): void {
    const map = this.findMapById(mapName);
    const dialogRef = this.dialog.open(DeleteMapDialog, {
      width: '320px',
      data: { mapName: mapName, id: map.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.id = result;
      this.refresh();
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateMapDialog, {
      width: '250px',
      data: { mapName: this.mapName }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.mapName = result;
    });
  }

  findMapById(mapName): Map {
    for (let i = 0; i < this.maps.length; i++) {
      if (this.maps[i].name === mapName) {
        return this.maps[i];
      }
    }
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

@Component({
  selector: 'delete-map-dialog',
  templateUrl: 'delete-map-dialog.html',
})
export class DeleteMapDialog {
  loading: boolean = false;

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.loading = true;
    this.userService.deleteMap(this.data.id)
      .subscribe(
        data => {
          this.snackBar.open(this.data.mapName + " delete successfully!", "OK", {
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
}

@Component({
  selector: 'create-map-dialog',
  templateUrl: 'create-map-dialog.html',
})
export class CreateMapDialog {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<CreateMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.router.navigate(['/map'], { queryParams: { mapName: this.data.mapName, mode: 'create' } });
  }
}