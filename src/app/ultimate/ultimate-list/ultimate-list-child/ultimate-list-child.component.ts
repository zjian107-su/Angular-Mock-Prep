import { PostService } from './../services/post.service';
import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-ultimate-list-child',
  templateUrl: './ultimate-list-child.component.html',
  styleUrls: ['./ultimate-list-child.component.css'],
})
export class UltimateListChildComponent {
  @Input() data: User = {} as User;

  constructor(public ps: PostService) {}

  toggleExpanded(user: User) {
    user.isExpanded = !user.isExpanded;
  }
}
