import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const ContentfulLocation = ({ data: { location } }) => {
    const { name } = location
    return (
      <Layout>
        <SEO title={name} />
            <h2>{name}</h2>
        </Layout>
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