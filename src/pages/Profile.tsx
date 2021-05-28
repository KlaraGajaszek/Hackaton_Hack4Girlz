import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';
import profile from '../assets/png/profile.png';
import cori_cat from '../assets/png/cat/Walk (5).png'
import CustomProgressBar from './CustomProgressBar';

export const Profile = () => {
    return (
        <>
            <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia." />
            <UserInfo name="Ela Popiel" avatarSrc={profile} />
            <CustomProgressBar  
                currentExp={35}
                levelCapExp={100}
                avatarIcon={cori_cat}
            />
        </>
    );
};
