import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface User {
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-regist-form',
  templateUrl: './regist-form.component.html',
  styleUrls: ['./regist-form.component.css'],
})
export class RegistFormComponent implements OnInit {
  users: User[] = [];
  signupForm = this.fb.group({
    name: ['mike', [Validators.required]],
    email: ['daniel@gmail.com', [Validators.required, Validators.email]],
    website: ['mysite.com', [Validators.required]],
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (response) => {
          this.users = response;
        },
      });
  }

  submit() {
    if (this.signupForm.valid) {
      const newUser: User = {
        name: this.signupForm.get('name')!.value ?? '',
        email: this.signupForm.get('email')!.value ?? '',
        website: this.signupForm.get('website')!.value ?? '',
      };
      this.users.push(newUser);
    }

    this.signupForm.reset();
  }
}
