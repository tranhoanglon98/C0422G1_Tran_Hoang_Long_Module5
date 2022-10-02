import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/todos")
  }

  toggle(toggle: Todo){
    return this.httpClient.patch("http://localhost:3000/todos/"+toggle.id,toggle)
  }

  add(content: string){
    const todo: Todo = {
      content: content,
      complete: false
    }
    return this.httpClient.post("http://localhost:3000/todos",todo)
  }
}
