import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataFilterComponent } from './datafilter/datafilter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUtils} from "./fileutils/fileutils";
import {RangeFilterPipe} from "./pipes/rangefilter.pipe";
import {RemoveQuotes} from "./pipes/removequotes.pipe";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-route.module";
@NgModule({
  declarations: [
    AppComponent,
    DataFilterComponent,
    RemoveQuotes,
    RangeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    FileUtils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
