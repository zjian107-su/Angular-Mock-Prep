import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { badLengthValidator } from './lengthValidator';

@Component({
  selector: 'app-validator-length',
  templateUrl: './validator-length.component.html',
  styleUrls: ['./validator-length.component.css'],
})
export class ValidatorLengthComponent {
  tags = this.fb.array([], [badLengthValidator(3, 5)]);
  apple = 0;
  constructor(private fb: FormBuilder) {}

  addTags() {
    this.apple = this.apple + 1;
    this.tags.push(this.fb.control(this.apple));
    console.log(this.tags);
  }

  removeTag(i: number) {
    this.tags.removeAt(i);
  }
}
