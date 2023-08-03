// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cardlist from './components/Todolist';
function App() {

  return (
    <>
      <ChakraProvider>
        <Navbar></Navbar>
        <Cardlist></Cardlist>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App
