import React from "react";
import { useTodoManager } from "./functions/useTodoManager"; // Import the custom hook
import { TodoItem } from "./TodoItem"; // Import TodoItem component if needed

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoManager(); // Use the custom hook

  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <ul className="list">
        {todos.length === 0 && <p>No Todos</p>}
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
