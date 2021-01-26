import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <p>AudioC0RE PoC of website. Content comes from Contentful.</p>
    <p>
      All pages are generated with data from Contentful with Gatsby’s File
      System Route API{' '}
    </p>
    <p>
      I don't know yet how to redirect the main index page to /home as the
      latter is generated with Gatsby’s File System Route API
    </p>
  </Layout>
);

export default IndexPage;
