import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Link, Spacer, Text, Button } from '@chakra-ui/react';

const NavBarItem = ({ children, to, ...rest }) => (
  <Button
    as={GatsbyLink}
    to={to}
    width={['100%', 'auto']}
    textAlign="center"
    bg="blue.400"
    activeStyle={{ color: 'white', background: 'red' }}
  >
    <Text display="block" {...rest}>
      {children}
    </Text>
  </Button>
);

export default NavBarItem;
