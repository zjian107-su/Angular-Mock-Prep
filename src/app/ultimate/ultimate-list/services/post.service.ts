import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  users: User[] = [];
  posts: Post[] = [];
  query = this.fb.control('');
  showUsers: User[] = [];
  userPostMap: Map<number, Post[]> = new Map();

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/');
  }

  getData(): Observable<{ posts: Post[]; users: User[] }> {
    return forkJoin({
      posts: this.getPosts(),
      users: this.getUsers(),
    });
  }

  assignData() {
    this.getData().subscribe({
      next: (data) => {
        this.posts = data.posts;
        this.users = data.users;
        this.showUsers = data.users;

        for (const user of this.users) {
          const userPosts = this.posts.filter(
            (post) => post.userId === user.id
          );
          this.userPostMap.set(user.id, userPosts);
        }
        this.userPostMap;
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed fetch'),
    });
  }

  //simple version
  filterUser() {
    this.showUsers = this.users.filter((user) => {
      return user.name.toLowerCase().includes(this.query.value!.toLowerCase());
    });
  }

  filterUserNPosts() {
    this.showUsers = [];

    for (const user of this.users) {
      // filter posts for current user
      const userPosts = this.posts.filter((post) => {
        return (
          post.userId === user.id &&
          post.title.toLowerCase().includes(this.query.value!.toLowerCase())
        );
      });

      // if we do find userPosts, or name match, add
      if (
        userPosts.length > 0 ||
        user.name.toLowerCase().includes(this.query.value!.toLowerCase())
      ) {
        this.showUsers.push(user);
        this.userPostMap.set(user.id, userPosts);
      }
    }
  }
}
