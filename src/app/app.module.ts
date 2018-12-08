import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './_service/user.service';
import { UserComponent, CreateMapDialog, DeleteMapDialog } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { MapComponent } from './map/map.component';
import { MapGuard } from './_guard/map.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    MapComponent,
    DeleteMapDialog,
    CreateMapDialog,
    PageNotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [UserService, MapGuard],
  bootstrap: [AppComponent],
  entryComponents: [CreateMapDialog, DeleteMapDialog]
})
export class AppModule { }
