import {
  Checkbox,
  Button,
  ButtonGroup,
  IconButton,
  Heading,
  Text,
  Box,
  extendTheme,
  HStack,
} from "@chakra-ui/react";

import DeleteIcon from "./Icons/DeleteIcon";
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <HStack>
      <Checkbox
        isChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <Box my={2}>
        <Text
          style={{
            opacity: completed ? 0.5 : 1,
            transition: "opacity 0.2s ease-out", // Add the transition effect
          }}
          fontWeight={"light"}
          fontSize="sm"
        >
          {title}
        </Text>
      </Box>

      <ButtonGroup size="xs" isAttached variant="outline">
        <Button onClick={() => deleteTodo(id)} fontWeight={"light"}>
          Delete
        </Button>

        <IconButton onClick={() => deleteTodo(id)} icon={<DeleteIcon />} />
      </ButtonGroup>
    </HStack>
  );
}
