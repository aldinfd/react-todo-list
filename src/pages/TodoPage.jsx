import TodoHeader from "../components/TodoHeader"
import { useEffect, useState } from "react"
import { fetchTodosApi, createTodosApi, deleteTodosApi, editTodosApi } from "../api/todosAPI"
import TodoList from "../components/TodoList"
function Todo() {

    const [todoList, setTodoList] = useState([])

    //Get
    const fetchTodos = async () => {
        const todos = await fetchTodosApi()
        setTodoList(todos.data)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    //Create
    const createTodos = async (activity) => {
        const todo = { "activity": activity, "completed": false }
        const response = await createTodosApi(todo)
        setTodoList([...todoList, response.data])
    }

    //Edit
    const editTodo = async (id, newActivity) => {
        const editDataTodo = { activity: newActivity, completed: !id.completed }
        const response = await editTodosApi(id, editDataTodo) //Data baru yang sudah ditambah
        const updatedTodos = todoList.map((item) =>
            item.id === id ? response.data : item
        )
        setTodoList(updatedTodos)
    }

    //Delete
    const deleteTodo = async (id) => {
        await deleteTodosApi(id)
        const updatedTodos = todoList.filter(item => item.id !== id) //updata state
        setTodoList(updatedTodos)
    }

    //ToggleTodo
    const toggleTodo = async (id) => {
        const todo = todoList.find((t) => t.id === id)
        const updated = { ...todo, completed: !todo.completed }

        const response = await editTodosApi(id, updated)

        setTodoList(todoList.map((t) =>
            t.id === id ? response.data : t
        ))
    }

    return (
        <div className="m-4 p-4 bg-gray-300 rounded-lg max-w-[420px] mx-auto">
            <TodoHeader onAddTodo={createTodos} />
            <TodoList todoList={todoList} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default Todo