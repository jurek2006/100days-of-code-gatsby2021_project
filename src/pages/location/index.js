import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import LocationsList from '../../components/locationsList';

const Locations = () => (
  <Layout>
    <SEO title="Locations" />
    <LocationsList />
  </Layout>
);

export default Locations;
