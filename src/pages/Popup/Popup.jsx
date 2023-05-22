import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

import { GuichetForm } from './components/GuichetForm';
import './Popup.css';

const Popup = () => {
  return (
    <Container flexDirection="column" gap={16}>
      <Box
        as="header"
        display="flex"
        justifyContent="center"
        width="100%"
        p="8"
      >
        <Heading>Guichet Unique</Heading>
      </Box>
      <main>
        <GuichetForm />
      </main>
    </Container>
  );
};

export default Popup;
