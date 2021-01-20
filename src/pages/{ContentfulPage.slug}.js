import React from 'react'
import { graphql } from 'gatsby'


const ContentfulPage = ({data: {page}}) => {
    const {title} = page
    return (
        <div>
            <h1>{title}</h1>
        </div>
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