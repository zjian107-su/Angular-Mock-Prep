import { Component, Input } from '@angular/core';
import { Nav } from '../dataFetch';

@Component({
  selector: 'app-recursive-nav-child',
  templateUrl: './recursive-nav-child.component.html',
  styleUrls: ['./recursive-nav-child.component.css'],
})
export class RecursiveNavChildComponent {
  @Input() children: Nav[] = [];

  onClick(item: Nav) {
    item.expanded = !item.expanded;
  }
}
