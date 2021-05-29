import React from 'react';
import styled from 'styled-components';

import { Title } from '../components/Title';
import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';
import profile from '../assets/png/profile.png';
import { SectionInfo } from '../components/SectionInfo';
import { Carouzel } from '../components/Carouzel';
import { Box } from '@chakra-ui/react';
import CustomProgressBar from './CustomProgressBar';
import cori_cat from '../assets/png/cat/Walk (5).png';
import crown from '../assets/crown.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2500px;
`;

const MainWrapper = styled.div`
    padding: 32px 19px 117px;
`;
export const Profile = () => {
    return (
        <MainWrapper>
            <div style={{ backgroundColor: '#E5E5E5', margin: '-32px -19px 0 -19px', padding: '32px 21px' }}>
                <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia" />
            </div>
            <Wrapper>
                <UserInfo name="Ela Popiel" avatarSrc={profile} />
                <CustomProgressBar currentExp={25} levelCapExp={100} avatarIcon={cori_cat} />
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
                    <CustomProgressBar currentExp={25} levelCapExp={100} avatarIcon={cori_cat} levelIcon={crown} />
                </div>
                <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <Title title="Frontend developer" />
                    <CustomProgressBar currentExp={25} levelCapExp={100} avatarIcon={cori_cat} levelIcon={crown} />
                </div>
                <SectionInfo text="Kim jest mentor?" />
            </Wrapper>
        </MainWrapper>
    );
};
