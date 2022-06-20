import { Component, Input } from '@angular/core';
import { Tab } from '../interfaces/tab';

@Component({
  selector: 'app-auto-nav-child',
  templateUrl: './auto-nav-child.component.html',
  styleUrls: ['./auto-nav-child.component.css'],
})
export class AutoNavChildComponent {
  @Input() tab: Tab = {} as Tab;
}
