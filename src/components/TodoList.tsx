import React from "react";
import { Todo } from "../types/todo";
import { motion, AnimatePresence } from "framer-motion";
import "./TodoList.css";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      <AnimatePresence initial={false}>
        {todos.length === 0 ? (
          <motion.li
            className="empty-message"
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No hay tareas pendientes.
          </motion.li>
        ) : (
          todos.map((todo) => (
            <motion.li
              key={todo.id}
              className={`todo-item ${todo.done ? "done" : ""}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <span onClick={() => onToggle(todo.id)} className="todo-text">
                {todo.text}
              </span>
              <button onClick={() => onDelete(todo.id)} className="delete-button">
                ❌
              </button>
            </motion.li>
          ))
        )}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
