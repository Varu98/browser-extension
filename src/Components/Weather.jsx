import {
  Box,
  Code,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [loading, setLoading] = useState(true);
  const [apiLocation, setApiLocation] = useState({});
  const getUserLocation = async () => {
    await navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      setLocation({
        latitude: `${position.coords.latitude}`,
        longitude: `${position.coords.longitude}`,
      });
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.latitude}&lon=${location.longitude}&appid=c477c4f7c1793f6fc34d90444739b255`
      );
      setApiLocation({ ...data });
      setLoading(false);
    })();
  }, [location]);

  return loading ? (
    <Box
      position={'absolute'}
      top={'6'}
      right={'6'}
      maxwidth={['10rem', '20rem']}
      padding="6"
      boxShadow="lg"
      spacing={2}
    >
      <SkeletonCircle size="10" />
      <SkeletonText mt={6} noOfLines={4} spacing="4" />
    </Box>
  ) : (
    <VStack
      p={[0, 8]}
      position={'absolute'}
      top={'6'}
      right={'6'}
      borderRadius="5px"
      mt={[16, 0]}
      maxwidth={['10rem', '20rem']}
    >
      <HStack>
        <Heading>{apiLocation.name} </Heading>
        <Box as={'span'}>
          <Image
            width={'5rem'}
            src={`https://openweathermap.org/img/wn/${apiLocation.weather[0].icon}@2x.png`}
          />
        </Box>
      </HStack>

      <VStack>
        <Text fontSize={'1.5rem'}>{apiLocation.weather[0].description}</Text>
      </VStack>
      <Box fontSize={'1.5rem'} as="span">
        {'🌡 '}
        {apiLocation.main.feels_like} C
      </Box>
    </VStack>
  );
};

export default Weather;
