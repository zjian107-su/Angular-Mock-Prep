import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { badPasswordValidator } from './passwordValidator';

@Component({
  selector: 'app-validator-password',
  templateUrl: './validator-password.component.html',
  styleUrls: ['./validator-password.component.css'],
})
export class ValidatorPasswordComponent {
  password = new FormControl('123456', [
    Validators.required,
    Validators.minLength(8),
    badPasswordValidator(),
  ]);

  onClick() {
    console.log(this.password);
  }
}
