import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './exercises/card/card.component';
import { TitleAuthorComponent } from './exercises/title-author/title-author.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CategoryComponent } from './exercises/category/category.component';
import { RegistFormComponent } from './exercises/regist-form/regist-form.component';
import { RecursiveNavComponent } from './exercises/recursive-nav/recursive-nav.component';
import { RecursiveNavChildComponent } from './exercises/recursive-nav/recursive-nav-child/recursive-nav-child.component';
import { CounterComponent } from './exercises/counter/counter.component';

import { counterReducer } from './exercises/counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleAuthorComponent,
    CategoryComponent,
    RegistFormComponent,
    RecursiveNavComponent,
    RecursiveNavChildComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
