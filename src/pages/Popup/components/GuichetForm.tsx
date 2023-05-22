import React from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { sendMessageToActiveTab } from '../utils/sendMessage';

export const GuichetForm = () => {
  const [text, setText] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = async () => {
    sendMessageToActiveTab(text);
  };

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="form-values">Guichet unique JSON</FormLabel>
        <Input
          id="form-values"
          type="text"
          placeholder="Paste your json here"
          value={text}
          onChange={onChange}
        />
      </FormControl>
      <Button mt="4" type="button" onClick={onSubmit}>
        Create enterprise
      </Button>
    </>
  );
};
