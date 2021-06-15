import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardHolderComponent } from './card-holder/card-holder.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, CardHolderComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
