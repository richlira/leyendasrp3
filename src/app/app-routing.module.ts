import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './modules/start/component/start.component';
import { RulesComponent } from './modules/rules/component/rules.component';
import { StaffComponent } from './modules/staff/component/staff.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'reglamentos', component: RulesComponent},
  { path: 'staff', component: StaffComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
