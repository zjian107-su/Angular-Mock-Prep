import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.css'],
})
export class CustomDateComponent implements OnInit {
  method = '';
  date = new Date();

  ngOnInit(): void {
    this.method = 'fullDate';
  }
}
