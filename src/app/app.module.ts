import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routes';
import {MainModule} from './main/main.module';
import {PageNotFoundComponent} from './not-found.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    ModalModule.forRoot(),
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
