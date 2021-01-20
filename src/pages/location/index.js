import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const Locations = ({ data: { allContentfulLocation } }) => {
    const locations = allContentfulLocation.nodes
    return (
        <Layout>
        <h2>Locations:</h2>
            <ul>

            {
                    locations.map(location => <li key={location.slug}>
                            <Link to={location.locationPath}>
                                {location.name}
                            </Link>
                        </li>)
             }
            </ul>
        </Layout>
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