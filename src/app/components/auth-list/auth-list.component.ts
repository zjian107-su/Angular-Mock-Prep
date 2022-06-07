import { LogService } from './services/log.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css'],
})
export class AuthListComponent {
  constructor(public logService: LogService) {}
}
