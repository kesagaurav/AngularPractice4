import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  {path:'employee',component:EmployeeComponentComponent},
  {path:'employees', canActivate:[AuthguardService], component:EmployeeComponentComponent,children:[
    {path:':id/:name',component:EmployeeComponentComponent},
    {path:':id',component:EmployeeComponentComponent},
  ]},
  {path:'pipe',component:PipeDemoComponent},
  {path:'login',component:LoginFormComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
