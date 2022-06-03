import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  posts: Post[];
  isExpanded: boolean;
}

interface Post {
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  users: User[] = [] as User[];
  posts: Post[] = [] as Post[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts; 
      },
      complete: () => {
        this.getUsers().subscribe({
          next: (users) => {
            this.users = users.map((user) => ({
              ...user,
              posts: this.posts.filter((post) => post.userId === user.id),
              isExpanded: false,
            }));
          },
          complete: () => {
            console.log("Daniel's Observable callback hell");
          },
        });
      },
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  onClick(index: number) {
    this.users[index].isExpanded = !this.users[index].isExpanded;
  }
}
