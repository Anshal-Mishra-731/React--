import { createSlice, nanoid } from "@reduxjs/toolkit";


//This is how my todo array finna look originally. So before any action, your Redux store for todo looks like this
const initialState = {
    todos: [{id: 1, text: "Guten nacht"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo); 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload.id)
            if(todo) {todo.text = action.payload.text}
            //Mutable, that's why we didn't use maps to return an entirly new object
        },
    }
})
//In contextAPI the state is immutable, that's why ... is used, in here the "Immer" makes state mutable.
//kisi bhi reducer ko do cheezein milti hain, state ur action. State : vartaman state deta hai, An action is a template of an event that can carry parameters (data) in its payload.
//Redux will handle updating the state when these action/reducers are dispatched dispatched

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer

//Individual functions have to be exported along with the .reducer