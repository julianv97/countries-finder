import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Button from '../Button';

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode, Icon } = useDarkMode();

  return (
    <Button
      text={colorMode === 'light' ? 'Dark' : 'Light'}
      icon={<Icon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeSwitch;
