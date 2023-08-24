import { Checkbox, Box, Heading, Text } from "@chakra-ui/react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <Box>
              <Text pt="2" fontSize="sm">
                {title}
              </Text>
            </Box>
    <li>
      <Checkbox
        isChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />

      {title}

      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
