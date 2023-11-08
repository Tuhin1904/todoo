import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/todoSlice';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './Update';
import './Show.css';

const ShowTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [error,setError]=useState(null)
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20').then((response) => {
      dispatch(getTodos(response.data));
      setLoading(false)
    })
    .catch(error =>{
      setError("Error while fetching data")
      setLoading(false);
    });
  }, [dispatch]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className='showContainer'>
      {todos.map((todo,i) => ( 
        <div className="btns" key={todo.id}>
          <p>{i+1}.</p>
          <UpdateTodo todo={todo} />
          <DeleteTodo id={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default ShowTodos;
