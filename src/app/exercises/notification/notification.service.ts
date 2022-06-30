import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationSubject$ = new Subject<number>();

  constructor() {}

  getMessage() {
    return this.notificationSubject$.asObservable();
  }

  sendMessage(message: number) {
    this.notificationSubject$.next(message);
  }
}
