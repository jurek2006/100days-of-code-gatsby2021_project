import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import Logo from './Logo';
import NavBarLinks from './NavBarLinks';
import NavBarToggle from './NavBarToggle';

const NavBar = (props) => {
  const { allContentfulLocation } = useStaticQuery(getLocations);
  const locationsLinks = allContentfulLocation.nodes.map(
    ({ name: text, locationPath: to }) => ({ text, to })
  );

  const navBarElements = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Contact', to: '/contact' },
    {
      text: 'Locations',
      nestedElements: locationsLinks,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* NavBar for desktop screen md and bigger */}
      <Flex bg="red.500" p="1rem" display={{ base: 'none', md: 'flex' }}>
        <Logo />
        <Spacer />
        <NavBarLinks isOpen={isOpen} elements={navBarElements} />
      </Flex>
      {/* NavBar for mobile screen smaller than md  */}
      <Box bg="blue.500" p="1rem" display={{ base: 'block', md: 'none' }}>
        <Flex>
          <Logo />
          <Spacer />
          <NavBarToggle toggle={toggle} isOpen={isOpen} />
        </Flex>
        <NavBarLinks isOpen={isOpen} elements={navBarElements} />
      </Box>
    </>
  );
};

const getLocations = graphql`
  query {
    allContentfulLocation {
      nodes {
        name
        slug
        locationPath: gatsbyPath(
          filePath: "/location/{ContentfulLocation.slug}"
        )
      }
    }
  }
`;

export default NavBar;
