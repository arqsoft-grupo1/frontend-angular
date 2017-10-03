import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TablamateriasComponent } from './components/tablamaterias/tablamaterias.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserService } from "./servicios/userservice.service";
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    TablamateriasComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
