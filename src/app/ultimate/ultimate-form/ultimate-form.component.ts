import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { capitalizedCheck } from './capCheck';

@Component({
  selector: 'app-ultimate-form',
  templateUrl: './ultimate-form.component.html',
  styleUrls: ['./ultimate-form.component.css'],
})
export class UltimateFormComponent implements OnInit {
  signGroup = new FormGroup({
    name: new FormControl('', [Validators.required, capitalizedCheck()]),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log('A');
    if (this.signGroup.valid) {
      console.log(this.signGroup.value);
      this.signGroup.reset();
    } else {
      alert('invalid input');
    }
  }
}
