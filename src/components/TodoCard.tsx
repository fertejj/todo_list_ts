import React from "react";
import { CheckCircle, Trash2 } from "lucide-react";
import { Todo } from "../types/todo";
import { motion } from "framer-motion";
import "./TodoList.css";

type TodoCardProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onToggle, onDelete }) => {
  const isDone = todo.done;

  return (
    <motion.li
      className={`todo-item ${isDone ? "done" : ""}`}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{
        opacity: 1,
        scale: isDone ? 1.01 : 1,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ duration: 0.25 }}
      layout
    >
      <div className="todo-left" onClick={() => onToggle(todo.id)}>
        <motion.span
          className="todo-check-icon"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <CheckCircle
            size={22}
            strokeWidth={2}
            className={`check-icon-svg ${isDone ? "checked" : ""}`}
          />
        </motion.span>

        <span className="todo-text">{todo.text}</span>
      </div>

      <motion.button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Trash2 size={20} />
      </motion.button>
    </motion.li>
  );
};

export default TodoCard;
