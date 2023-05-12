import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const Todo = ({todo, no, toggleComplete, deleteTask, editTodo}) => {

  return (
    <div class="todo-task">
      <p onClick={() => toggleComplete(todo.id)} className={`task-text ${todo.completed ? "completed" : ""}`}><span className="no">{no}.</span> {todo.task}</p>
      <div className="todo-icon">
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={()=> editTodo(todo.id)}/>
        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={() => deleteTask(todo.id)} />
      </div>
    </div>
  );
};
