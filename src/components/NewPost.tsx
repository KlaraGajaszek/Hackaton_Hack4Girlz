import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Routes } from '../routing/router';

const Container = styled.div`
    padding: 20px 30px 0;
    display: flex;
    align-items: center;
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const Text = styled.div`
    font-size: 19px;
    font-weight: 700;
    margin-left: 12px;
    color: ${props => props.theme.rainbow.palette.text.gray};
`;

const NewPost = () => {
    const history = useHistory();
    return (
        <Container onClick={() => history.push(Routes.NewPost)}>
            <BiPlusMedical size="2em" />
            <Text>Dodaj post</Text>
        </Container>
    );
};

export { NewPost };
