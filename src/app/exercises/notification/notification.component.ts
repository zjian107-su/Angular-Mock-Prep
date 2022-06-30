import { Subscription } from 'rxjs';
import { NotificationService } from './notification.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  constructor(private ns: NotificationService) {}

  subscription01 = new Subscription();
  data01 = 1;
  subscription02 = new Subscription();
  data02 = 2;

  ngOnInit(): void {
    this.subscription01 = this.ns.getMessage().subscribe({
      next: (data) => (this.data01 = data),
    });
    this.subscription02 = this.ns.getMessage().subscribe({
      next: (data) => (this.data02 = data),
    });
  }

  onClick() {
    this.ns.sendMessage(3);
  }

  ngOnDestroy(): void {
    this.subscription01.unsubscribe();
    this.subscription02.unsubscribe();
  }
}
