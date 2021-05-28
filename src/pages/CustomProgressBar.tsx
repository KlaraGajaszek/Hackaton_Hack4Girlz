import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';
import LevelMarker from './LevelMarker';

const CustomProgressBar = ({ currentExp, levelCapExp, avatarIcon, levelIcon = null, levelText = '' }) => {

  const progressBarPercentage = (currentExp / levelCapExp) * 100

  return (
    <Box
      d="flex"
      flexDirection="column"
      m={3}
      color="#01B6F5"
      fontWeight="700"
    >
      <Box d="flex"
        alignItems="center"
      >
        <Text mr={3} >
          EXP
        </Text>

        <Box 
         d="flex"
         flexDirection="column"
         position="relative"
         w="100%"
         justifyContent="center"
         >
          <Image src={avatarIcon}
            alt="cori_cat icon"
            className="avatar_icon"
            w="50px"
            position="absolute"
            zIndex={1}
            ml={`calc(${currentExp}% - 25px)`}
          />
          <ProgressBar value={progressBarPercentage} />
        </Box>

        <LevelMarker levelIcon={levelIcon} text="21" />

        <Text ml={2}>
          level
        </Text>
      </Box>
      {`${currentExp} / ${levelCapExp} pkt`}
    </Box>
  );
};

export default CustomProgressBar;