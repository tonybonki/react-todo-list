import { Checkbox, Button, ButtonGroup, IconButton, Heading, Text, Box, HStack } from "@chakra-ui/react";

import DeleteIcon from "./Icons/DeleteIcon";
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <HStack>
      <Checkbox
        isChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <Box>
        <Text fontWeight={"light"} fontSize="sm">
          {title}
        </Text>
      </Box>

      <ButtonGroup size="xs" isAttached variant="outline">
        <Button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
          fontWeight={"light"}
        >
          Delete
        </Button>

        <IconButton
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
          aria-label="Add to friends"
          icon={<DeleteIcon />}
        />
      </ButtonGroup>
    </HStack>
  );
}
