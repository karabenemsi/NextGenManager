import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app/app.component';
import { NGMRouterModule } from './Modules/router.module';
import { MaterialModule } from './Modules/material.module';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';
import { NavigationSideComponent } from './navigation-side/navigation-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMainComponent,
    NavigationSideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NGMRouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
