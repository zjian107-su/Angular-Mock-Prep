import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-b-contentpro-child',
  templateUrl: './viewchild-b-contentpro-child.component.html',
  styleUrls: ['./viewchild-b-contentpro-child.component.css'],
})
export class ViewchildBContentproChildComponent implements AfterContentInit {
  currentContent: 'A' | 'B' = 'A';

  ngAfterContentInit() {
    this.currentContent = 'A';
  }

  toggle() {
    this.currentContent = this.currentContent === 'A' ? 'B' : 'A';
    console.log(this.currentContent);
  }
}
