import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import NavBarItem from './NavBarItem';
import NavBarMenuItem from './NavBarMenuItem';

const NavBarLinks = ({ isOpen, elements }) => (
  <Box
    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    flexBasis={{ base: '100%', md: 'auto' }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={['center', null, 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      {elements &&
        elements.map((element) => {
          if (element.text && element.to) {
            return <NavBarItem to={element.to}>{element.text}</NavBarItem>;
          }
          if (element.text && element.nestedElements) {
            return <NavBarMenuItem element={element} />;
          }
        })}
    </Stack>
  </Box>
);

export default NavBarLinks;
