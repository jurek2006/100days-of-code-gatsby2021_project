import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// I don't know (yet) how to use gatsby-plugin-image for images from contentful

const ContentfulLocation = ({ data: { location } }) => {
  const { name, image } = location;
  return (
    <Layout>
      <SEO title={name} />
      <h2>{name}</h2>
      {image && image.fluid && (
        <>
          <Img fluid={image.fluid} />
          <p>{image.description}</p>
        </>
      )}
    </Layout>
  );
};

export default ContentfulLocation;

// filtering by id is the fastest way
export const query = graphql`
  query($id: String) {
    location: contentfulLocation(id: { eq: $id }) {
      id
      slug
      name
      image {
        description
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
