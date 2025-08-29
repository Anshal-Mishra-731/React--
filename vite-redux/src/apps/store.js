import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from '../features/todoSlice';
export const store = configureStore({
    reducer: todoReducer
}); 
//ab hum kisi bhi component mein state ka access le sakte hain. 