import React from 'react';
import { Button } from 'react-rainbow-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LilaAndSzpila } from '../components/LilaAndSzpila';
import { SectionTitle } from '../components/SectionTitle';
import { UserBioInputs } from '../components/UserBioInputs';
import { UserInfo } from '../components/UserInfo';
import { Routes } from '../routing/router';

const Container = styled.div`
    height: 100%;
    background-color: ${props => props.theme.rainbow.palette.background.grey};
`;

const Main = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${props => props.theme.rainbow.palette.background.white};
    display: flex;
    flex-direction: column;
`;

const MyLink = styled(Link)`
    margin: 6px auto;
`;

const MyButton = styled(Button)`
    width: 130px;
`;

export const SetupPage = () => {
    return (
        <Container>
            <SectionTitle
                title="Przedstaw się"
                subtitle="Dodaj swoje zdjęcie, uzupełnij opis oraz wybierz branżę i specjalizację, które cię interesują."
            />
            <Main>
                <UserInfo name="Ela Popiel" />
                <UserBioInputs />
                <SectionTitle
                    title="Przewodnik"
                    subtitle="Kręte ścieżki kariery łatwiej przemierzać z kimś! Cora lub Lila chętnie wskażą Ci drogę."
                />
                <LilaAndSzpila />
                <MyLink to={Routes.Home}>
                    <MyButton label="Dalej" variant="brand" />
                </MyLink>
            </Main>
        </Container>
    );
};
