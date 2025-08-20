import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, editTodo, deleteTodo, toggleTodo }) => {
    return (
        <div className='mt-5 text-white'>
            {todoList.length > 0 ? ( ///bhbhb
                todoList.map((item) => (
                    <TodoItem key={item.id} item={item} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                ))
            ) : (
                <p>Tidak ada todo</p>
            )}
        </div>
    )
}

export default TodoList
