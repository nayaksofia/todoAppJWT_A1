import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  // Retrieve all todos for a given user
  retrieveAllTodos(username: string): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);

  }

  //Retrieve a todo for a given user by it's ID
  retrieveTodo(username: string, id: number): Observable<any> {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  // Delete a todo for a given user by its ID
  deleteTodo(username: string, id: number): Observable<any> {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  //Update/Edit a todo for given user by its ID
  updateTodo(username: string, id: number, todo:any ): Observable<any> {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  //Create todo for a user 
  createTodo(username :string, todo:any):Observable<any>{
    return this.http.post(`${API_URL}/users/${username}/todos` , todo);
  }


}
