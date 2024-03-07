import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
// import { ImQuotesLeft } from 'react-icons/im';
import myAvtar from '../assets/my-avatar.png';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>Our Purpose </Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            "Embark on a seamless crypto journey with our React app, where
            innovation meets simplicity. Our powerful tracker keeps you in sync
            with real-time market trends, empowering you to navigate the
            ever-changing landscape of cryptocurrencies effortlessly. Dive deep
            into insightful analytics, track live prices, and stay informed
            about the latest developments. From Bitcoin to altcoins, our
            comprehensive platform ensures you're always steps ahead."
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={myAvtar} />
          <Text>
            
            Jeet Sharma
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
