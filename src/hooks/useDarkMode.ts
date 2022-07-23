import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const useDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(MoonIcon, SunIcon);

  return {
    colorMode,
    toggleColorMode,
    Icon,
  };
};

export default useDarkMode;
