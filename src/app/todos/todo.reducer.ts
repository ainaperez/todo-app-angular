import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store'; 
import { TodoDTO } from './models/todo.dto'; 
import { createTodo } from './todo.actions'; 

export const initialState: TodoDTO[] = [];

const _todoReducer = createReducer(
    initialState,
    on(createTodo, (state, {title}) => [...state, new TodoDTO(title)])
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action); 
}

