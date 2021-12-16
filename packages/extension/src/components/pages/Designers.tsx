import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import CBTests from '../components/CBTests';
import MarkdownDisplay from '../components/MarkdownDisplay';

const DESC = `Simulate color impairment by converting current page to look like the selected color impairment`;

const Designers = () => {
  return (
    <div>
      <Heading
        size="md"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        Tests for Designers
      </Heading>

      <Box p={4} borderWidth={1} marginTop={6} borderRadius={10}>
        <Heading
          size="xl"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          Text Colours
        </Heading>
        <MarkdownDisplay>{DESC}</MarkdownDisplay>
        <CBTests />
      </Box>
    </div>
  );
};

export default Designers;
