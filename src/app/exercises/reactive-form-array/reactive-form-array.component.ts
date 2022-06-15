import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';

function phoneNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const validPhoneNumberRegex = /^[0-9]{10}$/;
  if (!control.value.match(validPhoneNumberRegex)) {
    return { invalidPhoneNumber: true };
  }
  return null;
}

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.css'],
})
export class ReactiveFormArrayComponent {
  form = this.fb.group({
    mike: ['mike', []],
    phoneNumbers: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get phoneNumbers() {
    return this.form.controls['phoneNumbers'] as FormArray;
  }

  addPhoneNumber() {
    const phoneNumberGroup = this.fb.group({
      number: ['', [Validators.required, phoneNumberValidator]],
    });

    this.phoneNumbers.push(phoneNumberGroup);
  }

  deletePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      alert('Not valid!');
    }
  }
}
