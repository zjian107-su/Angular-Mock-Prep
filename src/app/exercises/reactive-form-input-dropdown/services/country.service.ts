// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// interface CountryState {
//   USA: string[];
//   Canada: string[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class CountryStateService {
//   private countries = ['USA', 'Canada'];

//   private states = {
//     USA: ['California', 'Texas', 'New York'],
//     Canada: ['Ontario', 'Quebec', 'British Columbia'],
//   };

//   getCountries(): Observable<string[]> {
//     return of(this.countries);
//   }

//   getStates(country: string): Observable<string[]> {
//     return of(this.states[country] || []);
//   }
// }
