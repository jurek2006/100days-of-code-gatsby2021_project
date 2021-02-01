import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Link,
  Box,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import MenuMobileItem from './MenuMobileItem';

const NavBarMenuItem = ({ element }) => (
  <>
    {/* Menu for desktop screens */}
    <Box display={{ base: 'none', sm: 'block' }}>
      <Menu>
        <MenuButton
          as={Button}
          key={element.text}
          rightIcon={<ChevronDownIcon />}
        >
          {element.text}
        </MenuButton>
        <MenuList>
          {element.nestedElements &&
            element.nestedElements.map((nElement) => (
              <MenuItem key={nElement.text}>
                <Link as={GatsbyLink} w="100%" to={nElement.to}>
                  {nElement.text}
                </Link>
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Box>
    {/* Menu for mobile screens */}
    <MenuMobileItem element={element} />
  </>
);

export default NavBarMenuItem;
