import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import LocationsList from '../components/locationsList';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout title="AudioC0RE">
    <SEO title="Index" />
    <LocationsList />
    <p>AudioC0RE PoC of website. Content comes from Contentful.</p>
    <StaticImage
      src="../images/bruce-mars-DBGwy7s3QY0-unsplash.jpg"
      alt="Your headphones are here"
      placeholder="tracedSVG"
    />
    <span>
      Photo by{' '}
      <a href="https://unsplash.com/@brucemars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        bruce mars
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/s/photos/headphones?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Unsplash
      </a>
    </span>
  </Layout>
);

export default IndexPage;
