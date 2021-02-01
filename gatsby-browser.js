import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
// import customTheme from './theme/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider>
    <CSSReset />
    {element}
  </ChakraProvider>
);
