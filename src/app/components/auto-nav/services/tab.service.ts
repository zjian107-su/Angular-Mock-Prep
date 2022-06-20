import { Injectable } from '@angular/core';
import { Tab } from '../interfaces/tab';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  data: Tab[] = [
    {
      value: 'html',
      label: 'HTML',
      panel:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      value: 'css',
      label: 'CSS',
      panel:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      value: 'javascript',
      label: 'JavaScript',
      panel:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
    {
      value: 'angular',
      label: 'Angular',
      panel:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    },
  ];

  constructor() {}

  getData(): Tab[] {
    return this.data;
  }
}
