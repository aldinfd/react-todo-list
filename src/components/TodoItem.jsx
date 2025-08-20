import React, { useState } from 'react'

const TodoItem = ({ item, editTodo, deleteTodo, toggleTodo }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newActivity, setNewActivity] = useState(item.activity)

    const handleSave = () => {
        if (newActivity.trim() !== "") {
            editTodo(item.id, newActivity)
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setNewActivity(item.activity)
        setIsEditing(false)
    }
    return (
        <div className="bg-gray-100 flex items-center justify-between py-2 px-3 rounded-lg mt-2">
            {isEditing ? (
                <div className="flex items-center gap-2 w-full">
                    <input
                        type="text"
                        value={newActivity}
                        onChange={(e) => setNewActivity(e.target.value)}
                        className="rounded-lg px-2 py-1 text-sm w-full focus:outline-none text-black"
                        autoFocus
                    />
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm hover:bg-green-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-400 text-white px-2 py-1 rounded-lg text-sm hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <>
                    <div className='flex items-center'>
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} className="mr-2 w-4 h-4 cursor-pointer" />
                        <p className="text-black text-sm">{item.activity}</p>
                    </div>
                    <div className="flex gap-2">
                        <i
                            className="ri-edit-line text-blue-500 cursor-pointer"
                            onClick={() => setIsEditing(true)}
                        ></i>
                        <i
                            className="ri-delete-bin-line text-red-500 cursor-pointer"
                            onClick={() => deleteTodo(item.id)}
                        ></i>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem
