
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    getTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) => 
        todo.id === action.payload.id ? action.payload : todo
      );
    }
  }
});

export const { getTodos, addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
