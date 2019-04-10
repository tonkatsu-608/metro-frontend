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

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  loading: boolean = false;
  maps: any[] = [];
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
    this.refresh();
  }

  refresh(): void {
    this.mapService.getMaps().subscribe(data => {
      let maps = data;

      this.maps = maps.map(m => {
        this.userService.getUser(m.uid).subscribe(user => {
          m.firstname = user.firstname || "";
          m.lastname = user.lastname || "";
          m.email = user.email || "";
        });
        return m;
      });

      console.log(this.maps);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewMap(id): void {
    this.router.navigate(['/map/' + id]);
  }
}
