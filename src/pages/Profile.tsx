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

export const Profile = () => {
    return (
        <Wrapper>
            <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia." />
            <UserInfo name="Ela Popiel" avatarSrc={profile} />
            <CustomProgressBar
                currentExp={35}
                levelCapExp={100}
                avatarIcon={cori_cat}
                color="#1AD1A3"
                variant="success"
            />
            <div style={{ marginTop: '20px' }}>
                <SectionInfo text="W jaki sposób mogę zbierać punkty?" />
            </div>
            <div style={{ marginTop: '30px', marginBottom: '11px' }}>
                <Title title="Doświadczenie zdobyte w branżach" />
            </div>

            <div>
                <Carouzel />
            </div>
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Title title="UI/UX design" />
                <CustomProgressBar
                    currentExp={35}
                    levelCapExp={100}
                    avatarIcon={cori_cat}
                    color="#1AD1A3"
                    variant="success"
                />
            </div>
            <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                <Title title="Frontend developer" />
                <CustomProgressBar
                    currentExp={35}
                    levelCapExp={100}
                    avatarIcon={cori_cat}
                    color="#1AD1A3"
                    variant="success"
                />
            </div>
            <SectionInfo text="Kim jest mentor?" />
        </Wrapper>
    );
};
