import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState({
    todo: '',
    hasTodo: false,
  });
  const getTodos = e => {
    const { value } = e.target;
    setTodo(prev => ({ ...prev, todo: value }));
  };
  console.log(todo);
  return (
    <Box>
      {todo.hasTodo ? (
        <Heading mt={'2rem'}>{todo.todo}</Heading>
      ) : (
        <VStack>
          <Input
            onChange={e => getTodos(e)}
            mt={['0', '2rem']}
            fontSize={['1.2rem', '2rem']}
            variant={'flushed'}
            placeholder="Add your main focus for today !"
          />
          <Button
            onClick={() => {
              setTodo(prev => ({ ...prev, hasTodo: true }));
            }}
          >
            Add
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Todo;
