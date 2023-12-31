import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Input,
  FormControl,
  FormLabel,
  Image,
  Button,
  ButtonGroup,
  IconButton,
  HStack,
} from "@chakra-ui/react";

import { TodoList } from "./Todolist";

import { AddIcon } from "@chakra-ui/icons";

import { useState } from "react";

export default function ChakraUiForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      if (newItem === "") return;

      onSubmit(newItem);

      setNewItem("");
    }
  return (
    <>
      <Card
        fontWeight={"light"}
        mx={"auto"}
        my={"100px"}
        width={{ base: "90%", sm: "60%", md:'30%' }}
      >
        <CardHeader>
          <Box>
            <Image
              mx={"auto"}
              mb={6}
              h="65px"
              src="/images/logos/logo2.png"
            ></Image>
          </Box>
          <TodoList />
        </CardHeader>
      </Card>
    </>
  );
}
