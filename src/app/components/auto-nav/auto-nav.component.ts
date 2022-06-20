import { TabService } from './services/tab.service';
import { Component, OnInit } from '@angular/core';
import { Tab } from './interfaces/tab';

@Component({
  selector: 'app-auto-nav',
  templateUrl: './auto-nav.component.html',
  styleUrls: ['./auto-nav.component.css'],
})
export class AutoNavComponent implements OnInit {
  tabs: Tab[] = [];
  expandedTab: Tab = {} as Tab;

  constructor(private ts: TabService) {}

  ngOnInit(): void {
    this.tabs = this.ts.getData();
    this.expandedTab = this.tabs[0];
  }

  onClick(item: Tab) {
    this.expandedTab = item;
  }
}
