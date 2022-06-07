import { LogService } from './../services/log.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  signForm: FormGroup = this.bf.group({
    name: ['Daniel', []],
    password: ['123456', []],
  });

  constructor(public bf: FormBuilder, public logService: LogService) {}
}
