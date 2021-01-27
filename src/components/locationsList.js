import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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

const LocationsList = () => {
  const {
    allContentfulLocation: { nodes: locations },
  } = useStaticQuery(getLocations);
  console.log(locations);
  return (
    <div>
      <h2>Our locations:</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.slug}>
            <Link to={location.locationPath}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LocationsList;
