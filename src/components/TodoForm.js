
import React, {useState} from 'react';
export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }
  return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='What you do today?' className='todo-input' onChange={(e) => setValue(e.target.value) }/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    </div>
  )
}
