import { Checkbox, Heading, Text, Box, HStack } from "@chakra-ui/react";

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
        <Text fontWeight={"light"} fontSize="sm">
          {title}
        </Text>
      </Box>

      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </HStack>
  );
}
