import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import './Add.css';

function AddToDo() {
  const [todoName, setTodoName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title:todoName,
        completed: false,
      })
      .then((res) => {
        dispatch(addTodo(res.data));
      });
  };
  return (
    <div className='addComp'>
      <form onSubmit={handleSubmit}>
        <input  className="addInp" type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)} />
        <button className='addBtn' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddToDo;
