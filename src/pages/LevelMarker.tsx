import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const LevelMarker = ({ levelIcon = null, text = '', bgColor }) => {
    let levelImg = levelIcon;
    if (levelIcon == null) {
        levelImg = (
            <Box
                d="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                w="40px"
                h="40px"
                bgColor={bgColor}
                position="relative"
                zIndex={0}
                ml={-2}
            >
                <Text color="white" fontSize={16} fontWeight="700" position="relative" zIndex={1}>
                    {text}
                </Text>
            </Box>
        );
    } else {
        levelImg = <Image src={levelIcon} w="80px" />;
    }

    return <Box>{levelImg}</Box>;
};

export default LevelMarker;
