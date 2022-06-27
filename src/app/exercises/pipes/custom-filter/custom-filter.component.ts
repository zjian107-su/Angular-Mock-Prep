import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css'],
})
export class CustomFilterComponent {
  employees = [
    { name: 'John', department: 'Sales' },
    { name: 'Jane', department: 'Sales' },
    { name: 'Jack', department: 'Development' },
    { name: 'Jill', department: 'Marketing' },
    { name: 'Jack', department: 'Development' },
    { name: 'John', department: 'Sales' },
    { name: 'Jane', department: 'Sales' },
  ];

  filter = '';
}
