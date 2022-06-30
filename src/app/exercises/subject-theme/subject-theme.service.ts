import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectThemeService {
  theme = new BehaviorSubject('light');
  constructor() {}

  toggleTheme() {
    let message = this.getCurrent() === 'light' ? 'dark' : 'light';
    this.theme.next(message);
  }

  getCurrent(): string {
    return this.theme.getValue();
  }

  getThemeUpdates() {
    return this.theme.asObservable();
  }
}
