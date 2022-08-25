import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export const TaskForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)
    console.log(createTask)
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(title, description)

        //console.log(newTask);
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea"
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                value={title}
                autoFocus
            />
            <textarea placeholder="Escribe la descripción de la tarea"
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                value={description}
            ></textarea>
            <button>Agregar Tarea</button>
        </form>

    )
}
