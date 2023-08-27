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

          {/* <HStack
            as="form"
            onSubmit={handleSubmit}
            className="new-item-form"
            spacing={4}
          >
            <Input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
              my={3}
              w={300}
              size={"sm"}
            />

            <ButtonGroup size="sm" isAttached variant="outline">
              <Button type="submit" fontWeight={"light"}>
                Add
              </Button>
              
              <IconButton
                type="submit"
                aria-label="Add to friends"
                icon={<AddIcon />}
              />
            </ButtonGroup>
            
          </HStack> */}
          <TodoList />
        </CardHeader>
      </Card>
    </>
  );
}
