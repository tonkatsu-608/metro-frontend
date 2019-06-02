import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';

import { MapGuard } from './_guard/map.guard';
import { AuthGuard } from './_guard/auth.guard';
import { UserGuard } from './_guard/user.guard';

const routes: Routes = [
  { path: '',  redirectTo: '/community', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'community', component: CommunityComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'map/:mid', component: MapComponent, canActivate: [AuthGuard], canLoad: [UserGuard], canDeactivate: [MapGuard] },
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
