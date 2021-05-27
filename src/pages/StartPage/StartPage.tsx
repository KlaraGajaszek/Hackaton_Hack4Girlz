import React from 'react';
import {Button} from 'react-rainbow-components';
import {db} from '../../firebase';
import {Container} from "@chakra-ui/react"

export const StartPage = () => {
  return (
    <Container centerContent>
      <Button onClick={() => db.collection('User').add({name: 'value'})}>START</Button>;
    </Container>
  )
};
