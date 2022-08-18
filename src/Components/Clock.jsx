import { Box, Grid, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Greeting from './Greeting';
import Quotes from './Quotes';
import Weather from './Weather';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import UserOnboard from './UserOnboard';
import { useUserDetails } from '../Context/userContext';
import Todo from './Todo';

const Clock = () => {
  const { userName } = useUserDetails();

  let time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const [clock, setClock] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setClock(time);
  };

  console.log(userName.hasUserOnboarded);
  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <Box
      background={'url(https://picsum.photos/1080/720) center/cover no-repeat'}
      h="100vh"
      w="100vw"
    >
      {/* <ColorModeSwitcher /> */}
      <VStack
        h="100vh"
        w="100vw"
        spacing={'2rem'}
        backdropFilter={'auto'}
        backdropBlur={'2px'}
        backdropBrightness="40%"
        justifyContent={'center'}
        alignContent={'center'}
        justifyItems="center"
      >
        {userName.hasUserOnboarded ? (
          <VStack>
            <Weather />
            <Heading
              mt={['10rem', '10rem']}
              mb={['10rem', '0']}
              fontSize={['2rem', '5rem', '10rem']}
            >
              {clock}
            </Heading>
            <Greeting />
            <Todo />
            <Quotes />
          </VStack>
        ) : (
          <UserOnboard />
        )}
      </VStack>
    </Box>
  );
};

export default Clock;
