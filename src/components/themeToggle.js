import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  );
};

export default ThemeToggle;
