import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import useDarkMode from '../../hooks/useDarkMode';

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode, Icon } = useDarkMode();

  return (
    <Button onClick={toggleColorMode} w="28" justifyContent="space-around" bg="inherit">
      <Text>{colorMode === 'light' ? 'Dark' : 'Light'}</Text>
      <Icon />
    </Button>
  );
};

export default ThemeSwitch;
