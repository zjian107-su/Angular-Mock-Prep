import { SubjectThemeService } from './subject-theme.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-theme',
  templateUrl: './subject-theme.component.html',
  styleUrls: ['./subject-theme.component.css'],
})
export class SubjectThemeComponent {
  constructor(public sts: SubjectThemeService) {}
}
