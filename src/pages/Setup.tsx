import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';

export const SetupPage = () => {
    return (
        <div>
            <SectionTitle
                title="Konfiguracja konta"
                subtitle="Dodaj swoje zdjęcie, uzupełnij opis oraz wybierz branżę i specjalizację, które cię interesują."
            />
            <UserInfo name="Ela Popiel" horizontal />
        </div>
    );
};
