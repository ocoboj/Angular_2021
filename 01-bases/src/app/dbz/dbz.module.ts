import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from '../dbz/main-page/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
  MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
