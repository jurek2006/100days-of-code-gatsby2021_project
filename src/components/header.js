import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  const { allContentfulLocation } = useStaticQuery(getLocations);
  const locations = allContentfulLocation.nodes;
  console.log(locations);

  return (
    <StyledHeader>
      <h1>AudioC0RE</h1>
      <nav className="navBar">
        <Link className="navLink" activeClassName="navLink--active" to="/home">
          Home
        </Link>
        <Link className="navLink" activeClassName="navLink--active" to="/about">
          About
        </Link>
        <Link
          className="navLink"
          activeClassName="navLink--active"
          to="/location"
        >
          Locations:
        </Link>
        <div className="navBar__subBar">
          {locations.map((location) => (
            <Link
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
    </StyledHeader>
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

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid;

  .navBar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navBar__subBar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  a.navLink {
    padding: 0 0.5rem;
  }

  a.navLink--active {
    color: red;
  }
`;
