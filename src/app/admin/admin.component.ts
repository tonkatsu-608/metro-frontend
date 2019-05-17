import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';

import { first } from 'rxjs/operators';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loading: boolean = false;
  updating: boolean = false;
  users: User[] = [];
  displayedColumns: string[] = ['email', 'firstname', 'lastname', 'role', 'enabled'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public snackBar: MatSnackBar,
    private userService: UserService) {
   }

  ngOnInit() {
    this.refresh();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  enabledOnChange(row, element): void {
    this.loading = true;

    let user = new User();
    user.id = row.id;
    user.enabled = element.checked;
    this.userService.updteEnabled(user, user.id)
      .subscribe(
        () => {
          this.loading = false;
          this.snackBar.open("update user successfully", "OK", {
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

  refresh(): void {
    this.userService.getUsers().pipe(first()).subscribe(data => {
      this.users = data;
      this.dataSource  = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}