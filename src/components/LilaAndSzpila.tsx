import React, { useState } from 'react';
import { RadioGroup } from 'react-rainbow-components';
import styled from 'styled-components';
import Szpila from '../assets/png/cat/Walk (5).png';
import Lila from '../assets/png/dog/Walk (5).png';

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

const LilaAndSzpila = () => {
    const [selected, setSelected] = useState('Cora');

    const select = catName => () => {
        setSelected(catName);
    };

    const value = catName => (catName === selected ? catName : null);

    return (
        <Container>
            <div onClick={select('Cora')}>
                <CatImg src={Szpila} alt="Szpila" />
                <MyRadio
                    hideLabel
                    options={[{ value: 'Cora', label: 'Cora' }]}
                    value={value('Cora')}
                    orientation="horizontal"
                />
            </div>
            <div onClick={select('Lila')}>
                <CatImg src={Lila} alt="Lila" />
                <MyRadio
                    hideLabel
                    options={[{ value: 'Lila', label: 'Lila' }]}
                    value={value('Lila')}
                    orientation="horizontal"
                />
            </div>
        </Container>
    );
};

export { LilaAndSzpila };
