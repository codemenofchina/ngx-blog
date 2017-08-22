/**
 * Created by chenqiang on 2017/8/22.
 */
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main.routes';
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})

export class MainModule {}
