import { Component, ViewChild } from '@angular/core';
import { ViewchildAFocusChildComponent } from './viewchild-a-focus-child/viewchild-a-focus-child.component';

@Component({
  selector: 'app-viewchild-a-focus',
  templateUrl: './viewchild-a-focus.component.html',
  styleUrls: ['./viewchild-a-focus.component.css'],
})
export class ViewchildAFocusComponent {
  @ViewChild(ViewchildAFocusChildComponent)
  viewChildComponent!: ViewchildAFocusChildComponent;

  ngAfterViewInit() {
    this.focusOnChildInput();
  }

  focusOnChildInput() {
    this.viewChildComponent.onClick();
  }
}
