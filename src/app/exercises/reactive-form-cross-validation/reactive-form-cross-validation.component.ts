import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NamesMatchValidator } from './namesMatchValidator';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-reactive-form-cross-validation',
  templateUrl: './reactive-form-cross-validation.component.html',
  styleUrls: ['./reactive-form-cross-validation.component.css'],
})
export class ReactiveFormCrossValidationComponent implements OnInit {
  // show 3 user data
  data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@gamil.com',
    },
    {
      firstName: 'daniel',
      lastName: 'jiang',
      email: 'daniel@gamil.com',
    },
  ];

  observer = of(this.data);
  users: User[] = [] as User[];
  form: FormGroup = this.fb.group(
    {
      firstName: ['daniel'],
      lastName: ['daniele'],
      email: ['jiang@gmail.com', [Validators.email]],
    },
    { validators: NamesMatchValidator }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.observer.subscribe({
      next: (data) => (this.users = data),
    });
  }
}
