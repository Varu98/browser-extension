import {
  Badge,
  Box,
  Button,
  Code,
  Flex,
  Heading,
  HStack,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://zenquotes.io/api/random');
      setQuotes(...data);
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <Box width={'70rem'} padding="6" boxShadow="lg">
      <SkeletonText mt={6} noOfLines={4} spacing="8" />
    </Box>
  ) : (
    <VStack p={8} maxW={'70rem'}>
      <Code
        marginTop={['0', '2rem']}
        variant={'subtle'}
        fontSize={['.8rem', '1.3rem', '2rem']}
      >
        {quotes.q}
      </Code>
      <Badge
        alignSelf={'flex-end'}
        fontSize={['.8rem', '1.2rem']}
        variant={'solid'}
        colorScheme="purple"
      >
        Author: {quotes.a}
      </Badge>
    </VStack>
  );
};

export default Quotes;
