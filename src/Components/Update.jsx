import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import './update.css';

const UpdateTodo = ({ todo }) => {
  const [todoName, setTodoName] = useState(todo.title);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, { todoName }).then((response) => {
      dispatch(updateTodo(response.data));
    });
  };

  return (
    <div>
      <input className='inpBox' type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      <button className="upBtn" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateTodo;
