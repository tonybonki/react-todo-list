// Import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Text, Center } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <ChakraProvider>
        <Center boxShadow={'xs'} h="80px">
          <Text fontSize="2xl"><b>React</b> To-Do-List</Text>
        </Center>
      </ChakraProvider>
    </>
  );
}
