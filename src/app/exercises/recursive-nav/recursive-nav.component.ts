import { Component, OnInit } from '@angular/core';
import fetch, { Nav } from './dataFetch';

// completed in 18 mins

@Component({
  selector: 'app-recursive-nav',
  templateUrl: './recursive-nav.component.html',
  styleUrls: ['./recursive-nav.component.css'],
})
export class RecursiveNavComponent implements OnInit {
  navs: Nav[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch().then((data) => {
      this.navs = data;
    });
  }
}
