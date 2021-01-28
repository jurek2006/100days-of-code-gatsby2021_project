import React from 'react';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import { Box, Link, Text } from '@chakra-ui/react';
import ThemeToggle from './themeToggle';

const Header = () => {
  const { allContentfulLocation } = useStaticQuery(getLocations);
  const locations = allContentfulLocation.nodes;

  return (
    <Box as="header" background="rebeccapurple">
      <h1>
        <Link as={GatsbyLink} className="navLink" to="/">
          AudioC0RE
        </Link>
      </h1>
      <nav className="navBar">
        <Link
          as={GatsbyLink}
          className="navLink"
          activeClassName="navLink--active"
          to="/"
        >
          Home
        </Link>
        <Link
          as={GatsbyLink}
          className="navLink"
          activeClassName="navLink--active"
          to="/about"
        >
          About
        </Link>
        <Link
          as={GatsbyLink}
          className="navLink"
          activeClassName="navLink--active"
          to="/location"
        >
          Locations:
        </Link>
        <div className="navBar__subBar">
          {locations.map((location) => (
            <Link
              as={GatsbyLink}
              key={location.slug}
              className="navLink"
              activeClassName="navLink--active"
              to={location.locationPath}
            >
              {location.name}
            </Link>
          ))}
        </div>
      </nav>
      <ThemeToggle />
    </Box>
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

export default Header;

// TEMP to delete
// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   border: 1px solid;

//   .navBar {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }

//   .navBar__subBar {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//   }

//   a.navLink {
//     padding: 0 0.5rem;
//   }

//   a.navLink--active {
//     color: red;
//   }
// `;
