import { useState } from "react"
import { Task, TaskComponent } from "./componentes/Task";

let idCounter = 1;

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleAddTask = () => {
    setTasks(oldTasks => [...oldTasks, { id: idCounter++, title: newTaskTitle, isCompleted: false }]);
    setNewTaskTitle('');
  };

  const handleToggleTaskCompletion = (id: number) => {
    setTasks(oldTasks => oldTasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const handleRemoveTask = (id: number) => {
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id));
  };

  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div>
      <input value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} />
      <button onClick={handleAddTask}>Add task</button>
      {tasks.map(task => (
        <TaskComponent key={task.id} task={task} onToggle={handleToggleTaskCompletion} onRemove={handleRemoveTask} />
      ))}
      <div>Progress: {progress}%</div>
    </div>
  )
}

export default App
