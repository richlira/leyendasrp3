import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './component/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class StartModule { }
