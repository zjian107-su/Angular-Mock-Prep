import { LogService } from './../services/log.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { firstCharCapValidator } from './firstLetterCap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  signForm: FormGroup = this.bf.group({
    name: ['daniel', [Validators.required, firstCharCapValidator()]],
    password: ['123456', [Validators.required]],
  });

  constructor(public bf: FormBuilder, public logService: LogService) {}

  get nameControl() {
    console.log(this.signForm.get('name'));
    return this.signForm.get('name');
  }
}
