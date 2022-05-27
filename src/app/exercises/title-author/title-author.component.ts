import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// complete duration 22 mins

interface APIResponse {
  works: Work[];
}

interface Work {
  title: string;
  authors: Author[];
}

interface Author {
  name: string;
}

@Component({
  selector: 'app-title-author',
  templateUrl: './title-author.component.html',
  styleUrls: ['./title-author.component.css'],
})
export class TitleAuthorComponent implements OnInit {
  works: Work[] = [];
  searchQuery: FormControl = new FormControl('');
  searchedWorks: Work[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<APIResponse>('https://openlibrary.org/subjects/world.json')
      .subscribe({
        next: (data) => {
          this.works = data.works;
          this.searchedWorks = data.works;
        },
      });

    this.searchQuery.valueChanges.subscribe({
      next: (data) => {
        this.search(data);
      },
    });
  }

  search(keyword: string) {
    this.searchedWorks = this.works.filter((work) => {
      return (
        work.title.toLowerCase().includes(keyword.toLowerCase()) ||
        work.authors.some((author) => {
          return author.name.toLowerCase().includes(keyword.toLowerCase());
        })
      );
    });
  }
}
