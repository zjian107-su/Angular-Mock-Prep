import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './exercises/card/card.component';
import { CardChildComponent } from './exercises/card/card-child/card-child.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardComponent, CardChildComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
