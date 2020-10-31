import React, { useRef } from 'react';

export default function AddTodo({ setTodos }) {
  const taskNameInput = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const taskName = taskNameInput.current.value;
    if (taskName) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), name: taskName },
      ]);
      taskNameInput.current.value = '';
    }
  };
  return (
    <div>
      <h2>Maak een nieuwe taak aan</h2>
      <form onSubmit={onSubmitHandler}>
        <input name="task" ref={taskNameInput} placeholder="Nieuwe taak..." />
        <button type="submit">Aanmaken</button>
      </form>
    </div>
  );
}
