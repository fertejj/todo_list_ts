import React from "react";
import { Todo } from "../types/todo";
import { AnimatePresence, motion } from "framer-motion";
import TodoCard from "./TodoCard";
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
            key="empty"
            className="empty-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No hay tareas pendientes.
          </motion.li>
        ) : (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
