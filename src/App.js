import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Clock from './Components/Clock';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Clock />
    </ChakraProvider>
  );
}
export default App;
