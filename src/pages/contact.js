import * as React from 'react';
import { graphql } from 'gatsby';
import { FormiumForm } from '@formium/react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { formium } from '../lib/formium';

const Contact = ({ data }) => {
  const [success, setSuccess] = React.useState(false);

  return (
    <Layout>
      <SEO title="Contact us" />
      {success ? (
        <div>Thank you! Your response has been recorded.</div>
      ) : (
        <FormiumForm
          data={data.formiumForm}
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm('contactus', values);
            setSuccess(true);
          }}
        />
      )}
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    formiumForm(slug: { eq: "contactus" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;
