import React from 'react';

export default function TodoList({ todos, setTodos }) {
  const onClickHandler = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li onClick={() => onClickHandler(todo.id)} key={todo.id}>
            {todo.name}
          </li>
        );
      })}
    </ul>
  );
}
