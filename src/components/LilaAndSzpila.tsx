import React, { useState } from 'react';
import { RadioGroup } from 'react-rainbow-components';
import styled from 'styled-components';
import Szpila from '../assets/gifs/cat_idle.gif';
import Lila from '../assets/gifs/dog_idle.gif';
import SzpilaJump from '../assets/gifs/cat_jumping.gif';
import LilaJump from '../assets/gifs/dog_jumping.gif';
import { Animals } from '../constants/user';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 10px;
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
                <CatImg src={value(Animals.Szpila) ? SzpilaJump : Szpila} alt="Szpila" />
                <MyRadio
                    hideLabel
                    options={[{ value: Animals.Szpila, label: Animals.Szpila }]}
                    value={value(Animals.Szpila)}
                    orientation="horizontal"
                />
            </div>
            <div onClick={select(Animals.Lila)}>
                <CatImg src={value(Animals.Lila) ? LilaJump : Lila} alt="Lila" />
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
