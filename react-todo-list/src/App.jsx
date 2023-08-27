// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoList } from './components/Todolist';
import { useEffect, useState } from "react";
import ChakraUiForm from './components/TodoListCard';

import { useTodoManager } from './components/functions/useTodoManager';

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar></Navbar>
        <ChakraUiForm ></ChakraUiForm>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App
