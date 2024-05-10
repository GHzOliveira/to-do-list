import styles from './Task.module.css';

export type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
}

export function TaskComponent({ task, onToggle, onRemove }: Readonly<{ task: Task; onToggle: (id: number) => void; onRemove: (id: number) => void }>) {
    return (
      <div className={styles.task}>
        <input type="checkbox" checked={task.isCompleted} onChange={() => onToggle(task.id)} />
        <span className={task.isCompleted ? styles.completed : ''}>{task.title}</span>
        <button onClick={() => onRemove(task.id)}>Remove</button>
      </div>
    );
  }