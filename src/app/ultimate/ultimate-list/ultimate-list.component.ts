import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-ultimate-list',
  templateUrl: './ultimate-list.component.html',
  styleUrls: ['./ultimate-list.component.css'],
})
export class UltimateListComponent implements OnInit {
  constructor(public ps: PostService) {}

  ngOnInit(): void {
    this.ps.assignData();

    this.ps.query.valueChanges.pipe(debounceTime(50)).subscribe({
      next: () => {
        this.ps.filterUserNPosts();
      },
      error: (error) => console.log(error),
    });
  }
}
