import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.css'],
})
export class ReactiveFormArrayComponent {
  form = this.fb.group({
    mike: ['mike', []],
    lessons: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      body: ['beginner', Validators.required],
    });

    this.lessons.push(lessonForm);
    console.log(this.form.controls.lessons.length);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  getType(value: any): string {
    return typeof value;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
