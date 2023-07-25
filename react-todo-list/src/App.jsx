import { useState } from 'react'

// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <h1>To-do-list</h1>
      </ChakraProvider>
    </>
  );
}

export default App
