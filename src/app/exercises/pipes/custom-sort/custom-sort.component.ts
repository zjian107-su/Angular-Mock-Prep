import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-sort',
  templateUrl: './custom-sort.component.html',
  styleUrls: ['./custom-sort.component.css'],
})
export class CustomSortComponent {
  students = [
    { name: 'John', age: 16 },
    { name: 'Jane', age: 25 },
    { name: 'Jbne', age: 8 },
    { name: 'Jack', age: 19 },
  ];
}
