import React from 'react'

export const TaskCard = ({ task, deleteTask }) => {

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
