package com.sofi.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	// Want to have a static list of Todos

	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "in6Hours", "Learn Springboot", new Date(), false));
		todos.add(new Todo(++idCounter, "in6Hours", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "in6Hours", "Learn Java", new Date(), false));
		todos.add(new Todo(++idCounter, "in6Hours", "Learn MySQL", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}
	
	
	//For Saving : Data
	public Todo save(Todo todo) {
	  if(todo.getId()==-1 || todo.getId()==0) {     //For Adding Directly
		  todo.setId(++idCounter);
		  todos.add(todo);
	  }else {                    //For Update: first delete and then update
		  deleteById(todo.getId());
		  todos.add(todo);
	  }
		
	  return todo;
	}
	
	
	//For Deleting Data: By ID

	public Todo deleteById(long id) {
		
		Todo todo = findById(id);
		
		//Checking : If we are able to find the Todo
		if (todo == null) {
			return null;
		}
		
		//Checking : If we are able to delete the Todo 
		
		if (todos.remove(todo)) {

			return todo;
		}

		return null;
	}

	
	//For Getting Data : By Id
	public Todo findById(long id) {

		// Iteration
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
