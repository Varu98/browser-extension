import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Clock from './Components/Clock';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Clock />
    </ChakraProvider>
  );
}
export default App;
