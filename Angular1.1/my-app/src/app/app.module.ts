import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { myFirstClass } from './app.myFist-Component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    myFirstClass,
    AppComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
