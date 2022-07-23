import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { veryLightGray } from '../../theme/colors';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Stack w="100%" h="100%" minH="100vh" bg={veryLightGray}>
      <Header />
      <Flex w="100%" justifyContent="center">
        {children}
      </Flex>
    </Stack>
  );
};

export default Layout;
