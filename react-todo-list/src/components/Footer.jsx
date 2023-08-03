import {
  Box,
  Container,
  Stack,
  Text,
  Divider,
  Image,
  HStack,
  Tooltip,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

function Logo() {
  return <Image h={5} src="../../images/icons/icon.png"></Image>;
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Tooltip
          fontSize="xs"
          hasArrow
          label="View Github Repository"
          aria-label="A tooltip"
        >
          <Link href="https://github.com/tonybonki/react-todo-list">
            <Logo />
          </Link>
        </Tooltip>

        <Divider />
        <HStack spacing={2}>
          <Tooltip
            fontSize="xs"
            hasArrow
            label="View my website!"
            aria-label="A tooltip"
          >
            <Link href="https://tonybonki.me">
              <Image h={5} src={"../../images/icons/favicon.ico"}></Image>
            </Link>
          </Tooltip>
          <Text fontSize={"15px"} pt={1}>
            {" "}
            2023 Tony Bonki
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}
