import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';
import Header from './header';

const Layout = ({ children, title = '' }) => (
  <Box>
    <Header />
    <Heading as="h1" fontSize="xl">
      {title}
    </Heading>
    <main>{children}</main>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
