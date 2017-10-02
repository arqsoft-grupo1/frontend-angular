import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TablamateriasComponent } from './components/tablamaterias/tablamaterias.component';
import {MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import {MdTableModule} from '@angular/material';
import {MdPaginatorModule} from '@angular/material';
import {MdExpansionModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';

import { UserService } from "./servicios/userservice.service";

@NgModule({
  declarations: [
    AppComponent,
    TablamateriasComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdTableModule,
    MdPaginatorModule,
    MdExpansionModule,
    MdSelectModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
