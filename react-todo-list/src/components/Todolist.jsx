import React from "react";
import { Input } from "@chakra-ui/react";
import { useTodoManager } from "./functions/useTodoManager"; // Import the custom hook
import { TodoItem } from "./TodoItem"; // Import TodoItem component if needed

import { useState } from "react";

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoManager(); // Use the custom hook
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <div>
      <Input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value), () => addTodo(newItem)}
        
        type="text"
        id="item"
        my={3}
        w={300}
        size={"sm"}
      />
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
