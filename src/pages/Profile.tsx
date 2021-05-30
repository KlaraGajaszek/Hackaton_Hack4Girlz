import React from 'react';
import styled from 'styled-components';

import { Title } from '../components/Title';
import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';
import { SectionInfo } from '../components/SectionInfo';
import { Carouzel } from '../components/Carouzel';
import CustomProgressBar from './CustomProgressBar';
import Szpila from '../assets/gifs/cat_walking.gif';
import Lila from '../assets/gifs/dog_walking.gif';
import crown from '../assets/crown.svg';
import { useAuthContext } from '../contexts/Auth';
import { Animals } from '../constants/user';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2500px;
`;

const MainWrapper = styled.div`
    padding: 32px 20px 117px;
`;
export const Profile = () => {
    const {
        user,
        userData: { animal }
    } = useAuthContext();

    return (
        <MainWrapper>
            <div style={{ backgroundColor: '#E5E5E5', margin: '-32px -20px 0 -20px', padding: '32px 20px' }}>
                <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia" />
            </div>
            <Wrapper>
                <UserInfo />
                <CustomProgressBar
                    currentExp={25}
                    levelCapExp={100}
                    avatarIcon={animal === Animals.Szpila ? Szpila : Lila}
                />
                <div style={{ marginTop: '15px' }}>
                    <SectionInfo text="W jaki sposób mogę zbierać punkty?" />
                </div>
                <div style={{ marginTop: '15px', marginBottom: '11px' }}>
                    <Title title="Doświadczenie zdobyte w branżach" />
                </div>

                <div>
                    <Carouzel />
                </div>
                <div style={{ marginTop: '11px', marginBottom: '30px' }}>
                    <Title title="UI/UX design" />
                    <CustomProgressBar
                        currentExp={25}
                        levelCapExp={100}
                        avatarIcon={animal === Animals.Szpila ? Szpila : Lila}
                        levelIcon={crown}
                    />
                </div>
                <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <Title title="Frontend developer" />
                    <CustomProgressBar
                        currentExp={25}
                        levelCapExp={100}
                        avatarIcon={animal === Animals.Szpila ? Szpila : Lila}
                        levelIcon={crown}
                    />
                </div>
                <SectionInfo text="Kim jest lider/ka?" />
            </Wrapper>
        </MainWrapper>
    );
};
