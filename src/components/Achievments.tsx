import React, { useState } from 'react';
import styled from 'styled-components';
import { Chip } from 'react-rainbow-components';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const Container = styled.div`
    padding: 10px 30px;
`;

const alltags = [
    { name: '#Osiągnięcia', isSelected: true },
    { name: '#Problemy', isSelected: false },
    { name: '#Edukacja', isSelected: false },
    { name: '#SamoŻycie', isSelected: false }
];

const Achievments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tags, setTags] = useState(alltags);

    const handleChange = i => {
        setCurrentIndex(i);
    };

    const selectTag = name => () => {
        setCurrentIndex(tags.findIndex(tag => tag.name === name));
        setTags(prev => {
            return prev.map(tag => (tag.name === name ? { name, isSelected: !tag.isSelected } : tag));
        });
    };

    return (
        <Container>
            <Carousel
                value={currentIndex}
                onChange={handleChange}
                plugins={[
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    }
                ]}
            >
                {tags.map(({ name, isSelected }) => (
                    <div key={name} onClick={selectTag(name)}>
                        <Chip label={name} variant={isSelected ? 'brand' : 'outline-brand'} />
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export { Achievments };
