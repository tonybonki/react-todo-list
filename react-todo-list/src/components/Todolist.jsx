import React from "react"
import {
  Input,
  Stack,
  StackDivider,
  ButtonGroup,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useTodoManager } from "./functions/useTodoManager" // Import the custom hook
import { TodoItem } from "./TodoItem" // Import TodoItem component if needed

import { useState } from "react"

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoManager() // Use the custom hook
  const [newItem, setNewItem] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    addTodo(newItem)

    setNewItem("")
  }
  return (
    <>
      <HStack
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
        <ButtonGroup
          size="sm"
          isAttached
          variant="outline"
        >
          <Button type="submit" fontWeight={"light"}>
            Add
          </Button>

          <IconButton
            type="submit"
            aria-label="Add to friends"
            icon={<AddIcon />}
          />
        </ButtonGroup>
      </HStack>

      {todos.length === 0 && (
        <p>
          Currently, there are no tasks to display. Your to-do list is clear and
          up to date. Feel free to add new tasks when needed!
        </p>
      )}
      <Stack divider={<StackDivider />}>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </Stack>
    </>
  );
}
