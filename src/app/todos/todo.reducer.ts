import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store'; 
import { TodoDTO } from './models/todo.dto'; 
import { completeTodo, createTodo, editTodo, deleteTodo } from './todo.actions'; 

export const initialState: TodoDTO[] = [];

const _todoReducer = createReducer(
    initialState,
    on(createTodo, (state, {title}) => [...state, new TodoDTO(title)]), 
    on(completeTodo, (state, { id }) => {
        return state.map((todo) => {
           if(todo.id === id) {
            console.log('changing')
            return {
                ...todo,
                done: true,
                }
            }else{
                return todo;
            } 
        })
    }), 
    on(editTodo, (state, {id, title }) => {
        return state.map((todo)=>{
            if(todo.id === id) {
                return{
                    ...todo, 
                    title: title,
                }
            }else{
                return todo;
            }
        });
    }), 
    on(deleteTodo, (state, {id})=>{
        return state.filter(todo => todo.id !== id)
    })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action); 
}

