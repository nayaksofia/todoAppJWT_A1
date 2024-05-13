import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common'; //Import formatDate function which is part of angular
import { BasicAuthenticationService } from '../service/basic-authentication.service';


export interface Todo {  //Create Interface
  id: number;
  description: string;
  targetDate: string; // Change type to string
  done: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = { id: 0, description: '', targetDate: '', done: false }; //Initialize todo 
  username : string ='';

  constructor(
    public basicAuthenticationService : BasicAuthenticationService,
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    // Retrieve authenticated user's username
    this.username = this.basicAuthenticationService.getAuthenticatedUser() ?? ''; 

    //Retrieve Todo Description and Date 
    if (this.id != -1) {
      this.todoService.retrieveTodo(this.username, this.id).subscribe(
        data => {
          this.todo = data;
          // Format the targetDate to "yyyy-MM-dd" format
          this.todo.targetDate = this.formatDate(this.todo.targetDate);
        },
        error => console.error(error)
      );
    }

  }

  //For Format Date in yyyy-MM-dd format 
  private formatDate(date: string): string {
    const parsedDate = new Date(date);
    return formatDate(parsedDate, 'yyyy-MM-dd', 'en-US');
  }

  saveTodo() {
    if (this.id === -1) {
      //Create Todo
      this.todoService.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log("Todo Created Successfully", data);
          alert('Todo Created Successfully!');
          this.router.navigate([this.todo])   //When click on Save, It naviagte to the Todo page
        },
        error => {
          console.error('Error In Creating Todo:', error);
          // Optionally, handle error messages or display error to the user
          alert('Failed to create todo. Please try again.');
        }
      )
    } else {
      //Update Todo
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log("Todo Updated successfully", data);
          alert('Todo updated successfully!');
          this.router.navigate([this.todo])   //When click on Save, It naviagte to the Todo page
        },
        error => {
          console.error('Error updating todo:', error);
          // Optionally, handle error messages or display error to the user
          alert('Failed to update todo. Please try again.');
        }
      )

    }


  }


}
