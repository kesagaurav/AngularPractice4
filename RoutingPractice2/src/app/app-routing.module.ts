import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipeComponent } from './pipe/pipe.component';
import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'employees', //canActivate:[AuthGuardService]
  canActivateChild:[AuthGuardService]
  , component:EmployeesComponent
   ,children:[
    {path: ':id/:name',component:EmployeesComponent},
    {path:':name',component:EmployeesComponent}
  ]},
  {path:'employee',component:EmployeeComponent},
  {path:'pipe',component:PipeComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
