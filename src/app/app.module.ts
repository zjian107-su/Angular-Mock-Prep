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
import { ReactiveFormInputTypesComponent } from './exercises/reactive-form-input-types/reactive-form-input-types.component';
import { AutoFocusDirective } from './exercises/reactive-form-input-types/diretives/auto-focus.directive';
import { ReactiveFormInputDropdownComponent } from './exercises/reactive-form-input-dropdown/reactive-form-input-dropdown.component';
import { AutoNavComponent } from './components/auto-nav/auto-nav.component';
import { AutoNavChildComponent } from './components/auto-nav/auto-nav-child/auto-nav-child.component';
import { UltimateListComponent } from './ultimate/ultimate-list/ultimate-list.component';
import { UltimateListChildComponent } from './ultimate/ultimate-list/ultimate-list-child/ultimate-list-child.component';
import { ViewchildAFocusComponent } from './exercises/viewchild-a-focus/viewchild-a-focus.component';
import { ViewchildAFocusChildComponent } from './exercises/viewchild-a-focus/viewchild-a-focus-child/viewchild-a-focus-child.component';
import { ViewchildBContentproComponent } from './exercises/viewchild-b-contentpro/viewchild-b-contentpro.component';
import { ViewchildBContentproChildComponent } from './exercises/viewchild-b-contentpro/viewchild-b-contentpro-child/viewchild-b-contentpro-child.component';
import { PipePlaygroundComponent } from './topics/pipe/pipe-playground/pipe-playground.component';
import { CustomSortComponent } from './exercises/pipes/custom-sort/custom-sort.component';
import { OlderThan18Pipe } from './exercises/pipes/custom-sort.pipe';
import { CustomDateComponent } from './exercises/pipes/custom-date/custom-date.component';
import { CustomFilterComponent } from './exercises/pipes/custom-filter/custom-filter.component';
import { filterDepartmentPipe } from './exercises/pipes/custom-filter.pipe';
import { ValidatorsComponent } from './exercises/validators/validators.component';
import { ValidatorPasswordComponent } from './exercises/validators/validator-password/validator-password.component';
import { ValidatorLengthComponent } from './exercises/validators/validator-length/validator-length.component';
import { NotificationComponent } from './exercises/notification/notification.component';
import { SubjectThemeComponent } from './exercises/subject-theme/subject-theme.component';

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
    ReactiveFormInputTypesComponent,
    AutoFocusDirective,
    ReactiveFormInputDropdownComponent,
    AutoNavComponent,
    AutoNavChildComponent,
    UltimateListComponent,
    UltimateListChildComponent,
    ViewchildAFocusComponent,
    ViewchildAFocusChildComponent,
    ViewchildBContentproComponent,
    ViewchildBContentproChildComponent,
    PipePlaygroundComponent,
    CustomSortComponent,
    OlderThan18Pipe,
    CustomDateComponent,
    CustomFilterComponent,
    filterDepartmentPipe,
    ValidatorsComponent,
    ValidatorPasswordComponent,
    ValidatorLengthComponent,
    NotificationComponent,
    SubjectThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
