import React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import { Box, Link, Text } from '@chakra-ui/react';
import ThemeToggle from './themeToggle';
import NavBar from './NavBar/NavBar';

const Header = () => (
  <Box as="header">
    <NavBar />
  </Box>
);

export default Header;
