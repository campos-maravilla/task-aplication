import logo from './logo.svg';
import './App.css';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
/* import { tasks as data } from './data/tasks' pasa tambien*/


function App() {
  //const [tasks, setTasks] = useState([]) pasa a TasContext

  /* useEffect(() => { pasa tambien
    setTasks(data)
  }, []) */

  /* function createTask(task) { pasa tambien
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  } */

  //function deleteTask(taskId) {
  // console.log(tasks);
  // console.log(taskId);
  // setTasks(tasks.filter(task => task.id !== taskId))
  //}

  return (
    <>
      {/*   <TaskForm createTask={createTask} /> */}
      <TaskForm />
      {/*      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
      <TaskList />
    </>
  );
}

export default App;
