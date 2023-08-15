import { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  ButtonGroup,
  IconButton,
  HStack,
} from "@chakra-ui/react";


export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit}
      className="new-item-form"
      spacing={4}
    >
      <FormControl>
        <FormLabel htmlFor="item">New Item</FormLabel>
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </FormControl>
      <Button type="submit" className="btn">
        Add
      </Button>
    </VStack>
  );
}
