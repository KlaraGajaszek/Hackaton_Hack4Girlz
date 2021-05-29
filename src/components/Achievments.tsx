import React from 'react';
import styled from 'styled-components';
import { Chip } from 'react-rainbow-components';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const Container = styled.div`
    padding: 10px 30px;
`;

const Achievments = () => {
    return (
        <Container>
            <Carousel
                plugins={[
                    'clickToChange',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ]}
            >
                <Chip label="#Osiągnięcia" variant="brand" />
                <Chip label="#Problemy" variant="outline-brand" />
                <Chip label="#Edukacja" variant="brand" />
                <Chip label="#Osiągnięcia" variant="outline-brand" />
            </Carousel>
        </Container>
    );
};

export { Achievments };
