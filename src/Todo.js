import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };

  return (
    <div className="container mt-5">
      <h1>Список Todo</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Добавьте задачу"
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
