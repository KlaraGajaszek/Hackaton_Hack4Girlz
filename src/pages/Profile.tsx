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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionInfoWrapper = styled.div`
    margin: 25px 0 11px 0;
`;

const SectionCarouzel = styled.div`
    margin: 11px 0 40px;
`;

const SectionInfoWrapperDown = styled.div`
    margin: 11px 0 40px;
`;

export const Profile = () => {
    return (
        <Wrapper>
            <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia." />
            <UserInfo name="Ela Popiel" avatarSrc={profile} />
            <CustomProgressBar 
                currentExp={35}
                levelCapExp={100}
                avatarIcon={cori_cat}
            />
            <SectionInfoWrapper>
                <SectionInfo text="W jaki sposób mogę zbierać punkty?" />
            </SectionInfoWrapper>
            <Title title="Doświadczenie zdobyte w branżach" />
            <SectionCarouzel>
                <Carouzel />
            </SectionCarouzel>
            <div>
                <Title title="Doświadczenie zdobyte w branżach" />
                <h1>CatBar</h1>
            </div>
            <div>
                <Title title="Doświadczenie zdobyte w branżach" />
                <h1>CatBar</h1>
            </div>
            <SectionInfo text="Kim jest mentor?" />
        </Wrapper>
    );
};
