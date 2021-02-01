import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import Header from './header';

const Layout = ({ children }) => (
  <Box>
    <Header />
    <Text fontSize="xl">Hello world</Text>
    <main>{children}</main>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
