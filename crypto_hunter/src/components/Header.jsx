import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
      {/* //btn-1 */}
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'}>Home</Link>
      </Button>
      {/* btn-2 */}
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>
      {/* btn-3 */}
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
