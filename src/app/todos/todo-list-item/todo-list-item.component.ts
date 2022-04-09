import { Component, OnInit, Input } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TodoDTO; 

  constructor() {
    this.todo = new TodoDTO('');
   }

  ngOnInit(): void {
    
  }

}
