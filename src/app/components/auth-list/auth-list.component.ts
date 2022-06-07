import { LogService } from './services/log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css'],
})
export class AuthListComponent implements OnInit {
  constructor(public logService: LogService) {}

  ngOnInit(): void {
    this.logService.clearCookie();
  }
}
