import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';
import LevelMarker from './LevelMarker';

const CustomProgressBar = ({ currentExp, levelCapExp, avatarIcon, levelNumber = 1, levelIcon = null }) => {
    const progressBarPercentage = (currentExp / levelCapExp) * 100;
    const levelText = levelIcon ? 'liderka' : 'level';
    const variant = levelIcon ? 'success' : 'brand';
    const colorUsed = levelIcon ? '#FC5B82' : '#01B6F5';

    return (
        <Box d="flex" flexDirection="column" m={3} color={colorUsed} fontWeight="700">
            <Box d="flex" alignItems="center">
                <Text mr={3}>EXP</Text>

                <Box d="flex" flexDirection="column" position="relative" w="100%" justifyContent="center">
                    <Image
                        src={avatarIcon}
                        alt="cori_cat icon"
                        className="avatar_icon"
                        w="50px"
                        position="absolute"
                        zIndex={1}
                        mb={3}
                        ml={`calc(${currentExp}% - 25px)`}
                    />
                    <ProgressBar value={progressBarPercentage} variant={variant} className="" />
                </Box>

                <LevelMarker levelIcon={levelIcon} text={levelNumber} color={colorUsed} />

                <Text ml={2}>{levelText}</Text>
            </Box>
            {`${currentExp} / ${levelCapExp} pkt`}
        </Box>
    );
};

export default CustomProgressBar;
