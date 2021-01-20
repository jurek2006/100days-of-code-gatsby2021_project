import React from 'react'

const ContentfulLocation = ({ data: { location } }) => {
    const { name } = location
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default ContentfulLocation

// filtering by id is the fastest way
export const query = graphql`
    query ($id: String) {
  location: contentfulLocation(id: {eq: $id}) {
    id
    slug
    name
  }
}
`