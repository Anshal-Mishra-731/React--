import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    //useSelector bhi ek method hi hai. ab state ke maadhyam se pehli ki values ka hamein acess mil gaya, ab poore store mein se kuch bhi nikaalo. Basically, humein store se todos ka acess mil gaya.
    const dispatch = useDispatch()
    const [editID, setEditID] = useState("")
    const [input, setInput] = useState("")


  return (
    <>
    <ul className="list-none max-w-3xl mx-auto">
        {todos.map((todo) => (
            <li
                className="mt-4 flex items-center bg-zinc-800 px-4 py-2 rounded justify-between"
                key={todo.id}
            >
           {editID === todo.id ? (<input
                type="text"
                className="text-white"
                defaultValue={todo.text}
                onChange={(e) => setInput(e.target.value)}
            />) :
            (
                <div className="text-white">{todo.text}</div>
            )}
            <div className='flex gap-2'>
            <button
            onClick={() => dispatch(removeTodo(todo.id))}
            //callback because otherwise the function would run immideatly without waiting for the click 
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button
            onClick={() => 
               {if (editID === todo.id){
                    dispatch(updateTodo({id: todo.id, text: input})); setEditID("")}
                else{
                    setEditID(todo.id)}}
            }
            //callback because otherwise the function would run immideatly without waiting for the click 
            className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md cursor-pointer">
                👆
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos