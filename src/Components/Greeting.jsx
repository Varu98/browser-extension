import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useUserDetails } from '../Context/userContext';

const Greeting = () => {
  const { userName } = useUserDetails();
  console.log(userName);
  return (
    <Heading fontSize={['1.5rem', '3rem']}>Hello {userName.userName}!</Heading>
  );
};

export default Greeting;
