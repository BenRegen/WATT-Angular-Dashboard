import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCompComponent } from './auth-comp/auth-comp.component';
import { LogInComponent } from './auth-comp/log-in/log-in.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"login", component:AuthCompComponent, canActivate: [AuthGuard]},
  {path:"login", component:LogInComponent, canActivate: [AuthGuard]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



