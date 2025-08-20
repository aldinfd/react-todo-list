import React from 'react'
import { useState } from 'react'
const TodoHeader = (props) => {

    const [todoInput, setTodoInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoInput.trim() === "") return
        props.onAddTodo(todoInput)
        setTodoInput("")
    }

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>To Do List</h1>
            <form className='flex space-x-2' onSubmit={handleSubmit}>
                <input type="text" value={todoInput} placeholder='Add Todo' onChange={handleChange} className='py-1 px-4 rounded-md bg-white mt-2 text-sm w-full' />
                <input type="submit" id='add_button' value="submit" className='py-1 px-4 rounded-md bg-blue-500 text-white mt-2 text-sm' />
            </form>
        </div>
    )
}

export default TodoHeader
