import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
// Import your authentication service
import { BasicAuthenticationService } from '../service/basic-authentication.service';


//Create Todo Class [Having parameters in constructor,in javaScript, ] 
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  
  //Declare An Array of ToDo's 
  todos: Todo[] = [];
  message:string ='';
  username : string = '';
  
  constructor(
    private todoService: TodoDataService,
    private router : Router,
    private basicAuthenticationService : BasicAuthenticationService //Inject the BasicAuthentication BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.username = this.basicAuthenticationService.getAuthenticatedUser() || ''; // Retrieve the authenticated user dynamically
    this.loadTodos();
  }

  loadTodos():void{
    this.todoService.retrieveAllTodos(this.username).subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      },
      error =>{
        console.error(error);
      }
    )
  }

  updateTodo(id : number) : void{
  console.log(`update todo ${id}`);
  this.router.navigate(['todos',id]);
  }

  addTodo(): void{
    this.router.navigate(['todos',-1])
  }

  deleteTodo(id : number):void{
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo(this.username,id).subscribe(
      response=>{
        console.log(response);
        this.message= `Deleted Todo  ${id} Successfully  !!!`;
        this.loadTodos(); //Refresh todos after deletion
      },
      error=>{
        console.error(error);
      }
    );
  }
}
