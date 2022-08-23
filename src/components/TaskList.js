


//console.log(tasks)

import { TaskCard } from "./TaskCard"

export const TaskList = ({ tasks, deleteTask }) => {


    if (tasks.length === 0) {
        return <h1>No hay tareas aun</h1>
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    )
}
