import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './material/material.module';
import { TempComponent } from './temp/temp.component';
import { LedComponent } from './led/led.component';

@NgModule({
  declarations: [AppComponent, NavComponent, TempComponent, LedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
