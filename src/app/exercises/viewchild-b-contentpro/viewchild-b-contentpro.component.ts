import { Component, ViewChild } from '@angular/core';
import { ViewchildBContentproChildComponent } from './viewchild-b-contentpro-child/viewchild-b-contentpro-child.component';

@Component({
  selector: 'app-viewchild-b-contentpro',
  templateUrl: './viewchild-b-contentpro.component.html',
  styleUrls: ['./viewchild-b-contentpro.component.css'],
})
export class ViewchildBContentproComponent {
  @ViewChild(ViewchildBContentproChildComponent)
  child!: ViewchildBContentproChildComponent;

  toggleContent() {
    this.child.toggle();
  }
}
