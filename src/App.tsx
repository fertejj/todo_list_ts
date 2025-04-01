import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import { Todo } from "./types/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_TODO_KEY = "todolist";
const LOCAL_THEME_KEY = "darkMode";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(LOCAL_TODO_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem(LOCAL_THEME_KEY) === "true";
  });

  // Guardar todos en localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  // Aplicar y guardar modo oscuro
  useEffect(() => {
    const root = document.documentElement; // <html>
    root.classList.toggle("dark", darkMode);
    localStorage.setItem(LOCAL_THEME_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Todo List</h1>
        <button className="theme-toggle-button" onClick={() => setDarkMode(!darkMode)}>
          <span className="theme-toggle-icon">{darkMode ? "☀️" : "🌙"}</span>
          {darkMode ? "Claro" : "Oscuro"}
        </button>
      </header>

      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
