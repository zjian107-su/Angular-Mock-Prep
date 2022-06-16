import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-input-types',
  templateUrl: './reactive-form-input-types.component.html',
  styleUrls: ['./reactive-form-input-types.component.css'],
})
export class ReactiveFormInputTypesComponent {
  form: FormGroup;
  private countries = ['USA', 'Canada'];

  private states = {
    USA: ['California', 'Texas', 'New York'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contactMethod: ['Email'],
      email: ['s'],
      phone: ['f'],
      post: ['d'],
    });
  }

  onClick() {
    console.log(this.form.controls['contactMethod'].value);
    console.log(this.form.value.contactMethod);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
