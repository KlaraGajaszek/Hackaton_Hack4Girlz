import React from 'react';

import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';
import profile from '../assets/png/profile.png';

export const Profile = () => {
    return (
        <>
            <SectionTitle title="Profil" subtitle="W tym miejscu możesz zobaczyć swoje dotychczasowe osiągnięcia." />
            <UserInfo name="Ela Popiel" avatarSrc={profile} />
        </>
    );
};
