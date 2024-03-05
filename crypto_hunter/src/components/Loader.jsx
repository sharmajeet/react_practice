import React from 'react';
import '../Style/loader.css';
import { Container } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Container
      h={'100vh'}
      w={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <div className="spinner"></div>
    </Container>
  );
};

export default Loader;
