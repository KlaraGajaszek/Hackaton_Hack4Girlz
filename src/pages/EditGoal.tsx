import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'react-rainbow-components';
import { ButtonIcon } from 'react-rainbow-components';
import { MdEdit } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import SlideX from '../assets/png/cat/SlideX.png';

export const EditGoal = () => {
    const [values, setValues] = useState<any>([]);

    const onSave = () => {
        console.log('onsave');
    };
    const onEdit = () => {
        console.log('onsave');
    };
    const onDelete = () => {
        console.log('onsave');
    };

    return <div></div>;
};
