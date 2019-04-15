import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Map } from '../_model/map.model';
import { User } from '../_model/user.model';
import { MapService } from '../_service/map.service';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  loading: boolean = false;
  length = 0;
  pageIndex = 0;
  pageSize = 3;
  filterValue: any;
  maps: any[] = null;
  pageSizeOptions: number[] = [3, 6, 9, 12];
  displayedColumns: string[] = ['name', 'img', 'createDate', 'editDate', 'isVisible', 'operation'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router,
    private mapService: MapService,
    private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  onPageChange(page) {
    this.pageIndex = page.pageIndex;
    this.pageSize = page.pageSize;
    this.refresh();
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  viewMap(id): void {
    this.router.navigate(['/map/' + id]);
  }

  refresh(): void {
    this.mapService.getMaps(this.pageIndex + 1, this.pageSize).subscribe(data => {
      let maps = data['maps'];
      this.maps = maps.map(m => {
        this.userService.getUser(m.uid).subscribe(user => {
          m.firstname = user.firstname || "";
          m.lastname = user.lastname || "";
          m.email = user.email || "";
        });
        return m;
      });

      this.length = data['mapCount'];
      this.pageIndex = data['currentPage'] - 1;
    });
  }
}