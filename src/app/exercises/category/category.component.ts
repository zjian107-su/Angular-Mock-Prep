import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/**
 * complete duration 44 mins. stucked on Map data structure.
 * used object instead
 * */

interface APIResponse {
  categories: string[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  categoryObject: { [key: string]: string[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<APIResponse>('https://api.publicapis.org/categories')
      .subscribe({
        next: (data) => {
          this.categories = data.categories;
          this.buildMap();
        },
      });
  }

  buildMap(): void {
    this.categories.forEach((item) => {
      const firstLetter = item.charAt(0).toUpperCase();

      if (!this.categoryObject[firstLetter]) {
        this.categoryObject[firstLetter] = [];
      }

      this.categoryObject[firstLetter].push(item);
    });
  }

  getCategoriesKeys(): string[] {
    return Object.keys(this.categoryObject);
  }
}
