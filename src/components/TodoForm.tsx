import React, { useState } from "react";
import "./TodoForm.css";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Agregar tarea"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Añadir
      </button>
    </form>
  );
};

export default TodoForm;
