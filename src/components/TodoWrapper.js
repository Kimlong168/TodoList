import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { Title } from './Title'
import { EditTodoForm } from './EditTodoForm'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        // document.body.style.backgroundImage =`url(https://source.unsplash.com/1600x900/?${todo}`;
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? {...todo, completed : !todo.completed} : todo)));
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo)));
    }

    const editTask = (newTask, id) => {
        setTodos(todos.map(todo => (todo.id === id ? {...todo, task : newTask, isEditing : !todo.isEditing} : todo)));
    }

  return (
    <div className='todo-wrapper'>
        <Title content="Getting Things Done"/>
        <TodoForm addTodo={addTodo}/>
        <br/>
        {
            todos.map((todo,index) => (
                todo.isEditing ? 
                <EditTodoForm key={todo.id} todo={todo} editTask={editTask}/> : 
                <Todo key={todo.id} no={index+1} todo={todo} toggleComplete={toggleComplete} deleteTask={deleteTask} editTodo={editTodo}/> 
            ))
        }
    </div>
  )
}
