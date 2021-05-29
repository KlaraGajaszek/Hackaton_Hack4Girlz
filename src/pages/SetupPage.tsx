import React, { useContext, useState } from 'react';
import { Button } from 'react-rainbow-components';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { LilaAndSzpila } from '../components/LilaAndSzpila';
import { SectionTitle } from '../components/SectionTitle';
import { UserBioInputs } from '../components/UserBioInputs';
import { UserInfo } from '../components/UserInfo';
import { Animals } from '../constants/user';
import { AuthContext } from '../contexts/Auth';
import { userSetup, UserSetupOptions } from '../db/userSetup';
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

const MyButton = styled(Button)`
    margin: 6px auto;
    width: 130px;
`;

export const SetupPage = () => {
    const [state, setState] = useState({
        description: '',
        industry: '',
        specialization: '',
        animal: Animals.Szpila
    });
    const { uid } = useContext(AuthContext);
    const history = useHistory();

    const handleInput = ({ name, value }) => {
        setState({ ...state, [name]: value });
    };

    const handleFormSubmit = async () => {
        const isSuccess = await userSetup(uid, state);
        if (isSuccess) history.push(Routes.Home);
    };

    return (
        <Container>
            <SectionTitle
                title="Przedstaw się"
                subtitle="Dodaj swoje zdjęcie, uzupełnij opis oraz wybierz branżę i specjalizację, które cię interesują."
            />
            <Main>
                <UserInfo />
                <UserBioInputs handleInput={handleInput} />
                <SectionTitle
                    title="Przewodnik"
                    subtitle="Kręte ścieżki kariery łatwiej przemierzać z kimś! Cora lub Lila chętnie wskażą Ci drogę."
                />
                <LilaAndSzpila handleInput={handleInput} />
                <MyButton onClick={handleFormSubmit} label="Dalej" variant="brand" />
            </Main>
        </Container>
    );
};
