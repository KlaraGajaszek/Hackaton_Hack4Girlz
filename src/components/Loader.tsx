import React from 'react';
import { Spinner } from 'react-rainbow-components';
import styled from 'styled-components';

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Loader = () => {
    return (
        <Main>
            <Spinner size="x-large" />
        </Main>
    );
};

export default Loader;
