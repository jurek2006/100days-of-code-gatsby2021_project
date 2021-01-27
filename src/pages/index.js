import * as React from 'react';
import Layout from '../components/layout';
import LocationsList from '../components/locationsList';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <LocationsList />
    <p>AudioC0RE PoC of website. Content comes from Contentful.</p>
  </Layout>
);

export default IndexPage;
