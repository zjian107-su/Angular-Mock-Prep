import { LogService } from './../services/log.service';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public listService: ListService) {}

  ngOnInit(): void {
    this.listService.getPosts();
    this.listService.getUsers();
  }
}
