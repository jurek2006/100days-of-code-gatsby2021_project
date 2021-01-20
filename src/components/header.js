import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Header = () => {
    const { allContentfulLocation } = useStaticQuery(getLocations);
    const locations = allContentfulLocation.nodes;
    console.log(locations)

    return (
        <StyledHeader>
            <h1>AudioC0RE</h1>
            <nav>
                <ul>
                    <li>
                        <Link activeClassName="active" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/about">About</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/location">Locations</Link>
                        <ul>
                            {
                                locations.map(location => <li key={location.slug}>
                                    <Link activeClassName="active" to={location.locationPath}>
                                        {location.name}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
        
    )
}

const getLocations = graphql`
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

export default Header

const StyledHeader = styled.header`
    a.active{
        color: red;
    }
`