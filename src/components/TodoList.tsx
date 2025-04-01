import React from "react";
import { Todo } from "../types/todo";
import "./TodoList.css";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <p className="empty-message">No hay tareas pendientes.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
          <span onClick={() => onToggle(todo.id)} className="todo-text">
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)} className="delete-button">
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
