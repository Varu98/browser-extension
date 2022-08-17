import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { React, useEffect } from 'react';
import { useUserDetails } from '../Context/userContext';

const UserOnboard = () => {
  const { userName, setUserName } = useUserDetails();

  const getUseruserName = e => {
    const { value } = e.target;
    setUserName(prev => ({ ...prev, userName: value }));
  };

  const submitUser = () => {
    setUserName(prev => ({
      ...prev,
      hasUserOnboarded: true,
    }));

    localStorage.setItem('user', JSON.stringify(userName.userName));
    localStorage.setItem('hasUserOnboarded', true);
  };

  console.log(userName);
  return (
    <Box>
      <Flex direction={'column'} gap={'4'} alignItems={'center'} maxW={'30rem'}>
        <Text fontSize={'3rem'}>Hello Hustler 👋</Text>
        <Input
          maxW={'10rem'}
          onChange={e => {
            getUseruserName(e);
          }}
          variant={'flushed'}
          placeholder={'What is Your Name?'}
        />
        <Button
          mt={'6'}
          onClick={() => {
            submitUser();
          }}
        >
          Let's Go!
        </Button>
      </Flex>
    </Box>
  );
};

export default UserOnboard;
