// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoList } from './components/Todolist';
import { useEffect, useState } from "react";
import { NewTodoForm } from './components/NewTodoForm';
import ChakraUiForm from './components/TodoListCard';
function App() {
const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS");
  if (localValue == null) return [];

  return JSON.parse(localValue);
});

useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos));
}, [todos]);

function addTodo(title) {
  setTodos((currentTodos) => {
    return [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ];
  });
}

function toggleTodo(id, completed) {
  setTodos((currentTodos) => {
    return currentTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }

      return todo;
    });
  });
}

function deleteTodo(id) {
  setTodos((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
}
  return (
    <>
      <ChakraProvider>
        <Navbar></Navbar>
        
        <h1 className="header">Todo List</h1>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <ChakraUiForm onSubmit={addTodo}></ChakraUiForm>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App
