import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { MessageDirective } from './message.directive';

const routes: Routes = [
  {path:'employee',component:EmployeeRegisterComponent},
  {path:'template',component:TemplateDemoComponent},
  {path:'pipe',component:PipesDemoComponent},
  {path:'message',component:MessageDirective},
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
