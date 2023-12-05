import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeFormsModuleComponent } from './employee-forms-module/employee-forms-module.component';
import { BookComponent } from './book/book.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'employee',component:EmployeeFormComponent},
  {path:'employee-form',component:EmployeeFormsModuleComponent},
  {path:'book',component:BookComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'**',redirectTo:'/employee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
