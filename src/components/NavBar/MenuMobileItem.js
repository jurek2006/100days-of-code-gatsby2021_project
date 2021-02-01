import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Link,
  Box,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MenuMobileItem = ({ element }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const toggleItemOpen = () => setIsItemOpen(!isItemOpen);

  return (
    <Box display={{ base: 'block', sm: 'none' }} w="100%">
      <Button
        onClick={toggleItemOpen}
        rightIcon={<ChevronDownIcon />}
        w="100%"
        mb={4}
      >
        {element.text}
      </Button>
      {isItemOpen && element.nestedElements && (
        <VStack spacing={8} pt={[4, 4, 0, 0]}>
          {element.nestedElements.map((nElement) => (
            <Button as={GatsbyLink} w="100%" to={nElement.to}>
              {nElement.text}
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default MenuMobileItem;
