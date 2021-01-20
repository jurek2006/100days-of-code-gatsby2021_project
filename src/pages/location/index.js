import React from 'react'
import { Link, graphql } from 'gatsby'

const Locations = ({ data: { allContentfulLocation } }) => {
    const locations = allContentfulLocation.nodes
    return (
        <div>
            Locations:
            <ul>

            {
                    locations.map(location => <li key={location.slug}>
                            <Link to={location.locationPath}>
                                {location.name}
                            </Link>
                        </li>)
             }
            </ul>
        </div>
    )
}

export default Locations

export const query = graphql`
    query {
  allContentfulLocation {
    nodes {
      name
      slug
      locationPath: gatsbyPath(filePath: "/location/{ContentfulLocation.slug}")
    }
  }
}
`