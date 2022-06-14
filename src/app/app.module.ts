import { UltimateFormComponent } from './ultimate/ultimate-form/ultimate-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './exercises/card/card.component';
import { TitleAuthorComponent } from './exercises/title-author/title-author.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CategoryComponent } from './exercises/category/category.component';
import { RegistFormComponent } from './exercises/regist-form/regist-form.component';
import { RecursiveNavComponent } from './exercises/recursive-nav/recursive-nav.component';
import { RecursiveNavChildComponent } from './exercises/recursive-nav/recursive-nav-child/recursive-nav-child.component';
import { CounterComponent } from './exercises/counter/counter.component';

import { counterReducer } from './exercises/counter/counter.reducer';
import { AuthListComponent } from './components/auth-list/auth-list.component';
import { ListComponent } from './components/auth-list/list/list.component';
import { FormComponent } from './components/auth-list/form/form.component';
import { ReactiveFormCrossValidationComponent } from './exercises/reactive-form-cross-validation/reactive-form-cross-validation.component';
import { ReactiveFormArrayComponent } from './exercises/reactive-form-array/reactive-form-array.component';

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
    AuthListComponent,
    ListComponent,
    FormComponent,
    UltimateFormComponent,
    ReactiveFormCrossValidationComponent,
    ReactiveFormArrayComponent,
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
