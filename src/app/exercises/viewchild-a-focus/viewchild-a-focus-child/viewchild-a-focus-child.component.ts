import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewchild-a-focus-child',
  templateUrl: './viewchild-a-focus-child.component.html',
  styleUrls: ['./viewchild-a-focus-child.component.css'],
})
export class ViewchildAFocusChildComponent {
  formControl = new FormControl('');

  @ViewChild('InputElement') elementRef!: ElementRef;

  onClick() {
    this.elementRef.nativeElement.focus();
  }
}
