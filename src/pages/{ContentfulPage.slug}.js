import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const ContentfulPage = ({data: {page}}) => {
    const {title} = page
    return (
        <Layout>
            <h2>{title}</h2>
        </Layout>
    )
}

export default ContentfulPage

// filtering by id is the fastest way
export const query = graphql`
    query ($id: String) {
  page: contentfulPage(id: {eq: $id}) {
    id
    slug
    title
  }
}
`