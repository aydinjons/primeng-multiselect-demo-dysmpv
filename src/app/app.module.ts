import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { AppComponent }   from './app.component';

import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		MultiSelectModule,
    FormsModule,
    HttpClientModule,
    DropdownModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
