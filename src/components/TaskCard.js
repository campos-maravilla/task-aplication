import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export const TaskCard = ({ task }) => {

    const { deleteTask } = useContext(TaskContext)
    /* const deleteTask = () => {
        alert(task.id)
    } */
    return (

        <div >
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>

    )
}
