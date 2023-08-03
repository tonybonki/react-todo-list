// Import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Text, Center, Image, Link, Tooltip } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Center boxShadow={"xs"} h="90px">
        <Tooltip hasArrow fontSize={'xs'} label="View Github Repository">
          <Link isExternal href="https://github.com/tonybonki/react-todo-list">
            <Image h="65px" src="../../images/logos/logo2.png"></Image>
          </Link>
        </Tooltip>
      </Center>
    </>
  );
}
