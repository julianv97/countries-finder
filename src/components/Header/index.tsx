import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { white } from '../../theme/colors';

const Header = () => {
  return (
    <Flex
      bg={white}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      py={6}
      px={20}
      boxShadow="sm"
    >
      <Heading as="h3">Where in the world?</Heading>
      <Box>Theme switcher</Box>
    </Flex>
  );
};

export default Header;
