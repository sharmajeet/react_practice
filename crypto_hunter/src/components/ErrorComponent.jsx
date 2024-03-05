import { Container, Text } from '@chakra-ui/react';
import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <Container
      h={'100vh'}
      w={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text fontSize={['22' , '40']}>{message}</Text>
    </Container>
  );
};

export default ErrorComponent;
