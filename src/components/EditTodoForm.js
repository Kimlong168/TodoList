import React, {useState} from 'react';
export const EditTodoForm = ({todo,editTask}) => {

    const [value, setValue] = useState(todo.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        editTask(value,todo.id);
        setValue('');
    }
  return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder={value} className='todo-input' onChange={(e) => setValue(e.target.value) }/>
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    </div>
  )
}
