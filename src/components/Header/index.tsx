import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { darkBlue, white } from '../../theme/colors';
import ThemeSwitch from '../ThemeSwitch';

const Header = () => {
  return (
    <Flex
      bg={white}
      _dark={{ bg: darkBlue }}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      py={6}
      px={20}
      boxShadow="sm"
    >
      <Heading as="h3">Where in the world?</Heading>
      <ThemeSwitch />
    </Flex>
  );
};

export default Header;
