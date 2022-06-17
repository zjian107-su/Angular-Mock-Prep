import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface CountryState {
  USA: string[];
  Canada: string[];
}

@Component({
  selector: 'app-reactive-form-input-dropdown',
  templateUrl: './reactive-form-input-dropdown.component.html',
  styleUrls: ['./reactive-form-input-dropdown.component.css'],
})
export class ReactiveFormInputDropdownComponent {
  countries: string[] = ['USA', 'Canada'];

  states: CountryState = {
    USA: ['California', 'Texas', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
  };

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  getCountries(): Observable<string[]> {
    return of(this.countries);
  }

  getStates(country: 'USA' | 'Canada'): Observable<String[]> {
    return of(this.states[country] || []);
  }
}
