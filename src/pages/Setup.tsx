import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { UserInfo } from '../components/UserInfo';

const SetupPage = () => {
    return (
        <div>
            <SectionTitle
                title="Konfiguracja konta"
                subtitle="Dodaj swoje zdjęcie, uzupełnij opis oraz wybierz branżę i specjalizację, które cię interesują."
            />
            <UserInfo />
        </div>
    );
};

export { SetupPage };