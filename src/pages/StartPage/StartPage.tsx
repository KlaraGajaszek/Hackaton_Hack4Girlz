import React from 'react';
import { Button } from 'react-rainbow-components';
import { db } from '../../firebase';

export const StartPage = () => {
    return <Button onClick={() => db.collection('User').add({ name: 'value' })}>START</Button>;
};
