import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ShowAllEmployeeComponent } from './show-all-employee/show-all-employee.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [

{path:'employee',component:EmployeeComponent},
{path:'update',component:UpdateEmployeeComponent},
{path:'delete',component:DeleteEmployeeComponent},
{path:'viewbyId',component:ViewEmployeeComponent},
{path:'showall',component:ShowAllEmployeeComponent},
{path:'application',component:ApplicationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
