import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoContainer() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'dynamische todos toevoegen' },
  ]);
  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
