import * as React from 'react';
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents } from '@formium/react';
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input as TextInput,
  Button as SubmitButton,
  Container,
} from '@chakra-ui/react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { formium } from '../lib/formium';

const FormControl = ({ label, children, required, error, description }) => (
  <ChakraFormControl isRequired={required} isInvalid={error}>
    <FormLabel>{label}</FormLabel>
    {children}
    <FormErrorMessage>{error}</FormErrorMessage>
    <FormHelperText>{description}</FormHelperText>
  </ChakraFormControl>
);

// Always define these outside of React so that
// components are not needlessly recreated on each render
const myComponents = {
  ...defaultComponents,
  FormControl,
  FormLabel,
  TextInput,
  Textarea,
  SubmitButton,
};

const Contact = ({ data }) => {
  const [success, setSuccess] = React.useState(false);

  return (
    <Layout title="Contact us">
      <SEO title="Contact us" />
      {success ? (
        <Container>Thank you! Your response has been recorded.</Container>
      ) : (
        <Container>
          <FormiumForm
            data={data.formiumForm}
            components={myComponents}
            onSubmit={async (values) => {
              // Send form values to Formium
              await formium.submitForm('contactus', values);
              setSuccess(true);
            }}
          />
        </Container>
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
