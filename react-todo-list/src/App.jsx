// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoList } from './components/Todolist';
import { useEffect, useState } from "react";
import { NewTodoForm } from './components/NewTodoForm';
import ChakraUiForm from './components/TodoListCard';

import { useTodoManager } from './components/functions/useTodoManager';

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar></Navbar>
        <TodoList/>
        <ChakraUiForm ></ChakraUiForm>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App
