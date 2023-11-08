import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';
import './Delete.css';

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
      dispatch(deleteTodo(id));
    });
  };

  return (
    <button className='deletebtn' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteTodo;
