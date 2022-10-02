import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../service/todo.service";
import {ok} from "assert";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  content: FormControl;
  toggle: Todo

  constructor(private todoService: TodoService) {
    this.content = new FormControl()
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(todo => {
      this.todos = todo
    })
  }

  toggleTodo(i: number) {
    this.toggle = this.todos[i]
    this.toggle.complete = !this.toggle.complete;
    this.todoService.toggle(this.toggle).subscribe(next => {
      this.ngOnInit()
    })
  }

  add() {
    this.todoService.add(this.content.value).subscribe(next => {
      this.ngOnInit()
    })
  }
}
