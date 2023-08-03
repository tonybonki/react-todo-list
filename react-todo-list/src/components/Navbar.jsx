// Import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Text, Center, Image, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Center boxShadow={"xs"} h="90px">
        <Link isExternal href="https://tonybonki.me">
          <Image h="65px" src="../../images/logos/logo2.png"></Image>
        </Link>
      </Center>
    </>
  );
}
