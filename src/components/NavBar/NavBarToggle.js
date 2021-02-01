import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const NavBarToggle = ({ toggle, isOpen }) => (
  <IconButton
    onClick={toggle}
    colorScheme="blue"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
  />
);

export default NavBarToggle;
