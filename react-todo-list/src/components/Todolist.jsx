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
  Image,
  Button,
  ButtonGroup,
  IconButton,
  HStack,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import { useState } from "react";

export default function Cardlist() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }



  return (
    <>
      <Card
        fontWeight={"light"}
        mx={"auto"}
        my={"100px"}
        width={{ base: "90%", sm: "40%" }}
      >
        <CardHeader>
          <Box>
            <Image
              mx={"auto"}
              mb={6}
              h="65px"
              src="../../images/logos/logo2.png"
            ></Image>
          </Box>
          <form onSubmit={handleSubmit} className="new-item-form">
            <HStack>
              <Input
                value={newItem}
                placeholder="Task Name"
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
                id="item"
                size={"sm"}
              />
              <Input
                value={newItem}
                placeholder="description"
                type="text"
                onChange={(e) => setNewItem(e.target.value)}
                id="item"
                size={"sm"}
              />
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button fontWeight={"light"}>Add</Button>
                <IconButton aria-label="Add to friends" icon={<AddIcon />} />
              </ButtonGroup>
            </HStack>
          </form>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
