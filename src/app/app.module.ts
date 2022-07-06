import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module'
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ExercisesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
