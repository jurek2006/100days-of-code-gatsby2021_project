import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <main>{children}</main>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const StyledLayout = styled.div`
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;
