import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { veryLightGray } from '../../theme/colors';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Stack h="100%" minH="100vh" bg={veryLightGray}>
      <Header />
      <Box h="100%">{children}</Box>
    </Stack>
  );
};

export default Layout;
