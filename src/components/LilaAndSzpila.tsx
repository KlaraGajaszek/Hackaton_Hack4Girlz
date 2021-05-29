import React, { useState } from 'react';
import { RadioGroup } from 'react-rainbow-components';
import styled from 'styled-components';
import Szpila from '../assets/png/cat/Walk (5).png';
import Lila from '../assets/png/dog/Walk (5).png';
import { Animals } from '../constants/user';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
`;

const CatImg = styled.img`
    width: 136px;
    height: 120px;
`;

const MyRadio = styled(RadioGroup)`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const LilaAndSzpila = ({ handleInput }) => {
    const [selected, setSelected] = useState<Animals>(Animals.Szpila);

    const select = (animal: Animals) => () => {
        setSelected(animal);
        handleInput({ name: 'animal', value: animal });
    };

    const value = (animalName: Animals) => (animalName === selected ? animalName : null);

    return (
        <Container>
            <div onClick={select(Animals.Szpila)}>
                <CatImg src={Szpila} alt="Szpila" />
                <MyRadio
                    hideLabel
                    options={[{ value: Animals.Szpila, label: Animals.Szpila }]}
                    value={value(Animals.Szpila)}
                    orientation="horizontal"
                />
            </div>
            <div onClick={select(Animals.Lila)}>
                <CatImg src={Lila} alt="Lila" />
                <MyRadio
                    hideLabel
                    options={[{ value: Animals.Lila, label: Animals.Lila }]}
                    value={value(Animals.Lila)}
                    orientation="horizontal"
                />
            </div>
        </Container>
    );
};

export { LilaAndSzpila };
