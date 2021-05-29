import React from 'react';
import styled from 'styled-components';
import Szpila from '../assets/png/cat/Head.png';

const Container = styled.div`
    padding: 30px 30px 0 30px;
`;

const Top = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 100%;
    color: ${props => props.theme.rainbow.palette.text.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Span = styled.span`
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const Bottom = styled.div`
    font-size: 14px;
    font-weight: 400;
`;

const AnimalImage = styled.img`
    height: 50px;
`;

const Greeting = () => {
    const firstName = 'Ela';
    return (
        <Container>
            <Top>
                <span>
                    Cześć <Span>{firstName}!</Span>
                </span>
                <AnimalImage src={Szpila} />
            </Top>
            <Bottom>Podziel się z innymi swoimi osiągnięciami lub poszukaj tematu, który Cię interesuje.</Bottom>
        </Container>
    );
};

export { Greeting };
