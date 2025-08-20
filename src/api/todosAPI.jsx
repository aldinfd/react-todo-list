import axios from "axios";

export const fetchTodosApi = async () => {
    const response = await axios.get("http://localhost:3005/todos")
    return response
}

export const createTodosApi = async (data) => {
    const response = await axios.post("http://localhost:3005/todos", data)
    return response
}

export const deleteTodosApi = async (id) => {
    const response = await axios.delete(`http://localhost:3005/todos/${id}`)
    return response.data
}

export const editTodosApi = async (id, data) => {
    const response = await axios.put(`http://localhost:3005/todos/${id}`, data)
    return response
}