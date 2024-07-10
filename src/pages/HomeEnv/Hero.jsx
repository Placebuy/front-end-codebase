import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

function Hero() {
  // Dynamic colors based on color mode
  const textColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const heroBgColor = useColorModeValue('#FAFAFA', 'gray.700');

  return (
    <>
      <Box
        backgroundImage="url('/Image/NewBG.png')"
        height={{ lg: "508px", md: "400px", sm: "380px" }}
        width="100%"
        bgColor={heroBgColor}
        backgroundSize="cover" // Ensures the image covers the entire area
        backgroundRepeat="no-repeat" // Prevents the image from repeating
        backgroundPosition="center" // Centers the image
        
        
>
        <Box
          ml={{ lg: '50px', md: '50px', sm: '0' }}
          display='flex'
          flexDir='column'
          justifyContent={{ lg: 'none', md: 'center', sm: 'center' }}
          alignItems='center'
          textAlign={{ sm: 'center' }}
        >
          <Text
            as='h2'
            fontWeight={700}
            fontFamily='revert-layer'
            fontSize={{ lg: '50px', md: '50px', sm: '35px' }}
            mt={36}
            color={'white'}
          >
            Life on Campus <br /> Made Easy
          </Text>

          <Text
            as='p'
            fontWeight={500}
            fontSize='16px'
            color={"white"}
            lineHeight={5}
          >
            Buy, Sell and connect with <br />students across campuses
          </Text>

          <Button
            mt={5}
            colorScheme='orange'
            variant='solid'
            pl={20}
            pr={20}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      <Box
        display='flex'
        flexDir='column'
        justifyContent={{ lg: 'none', md: 'center', sm: 'center' }}
        alignItems='center'
        textAlign='center'
        bgColor={bgColor}
      >
        <Text
          display='flex'
          alignItems='center'
          textAlign='center'
          width='60%'
          p={4}
          color={textColor}
        >
          PLACEBUY is the easiest way to get what you need for college beyond. From textbooks to tech, furniture to fashion, our marketplace has got you covered! Join a community of students in Nigeria, buying, selling, and trading with each other.
        </Text>
      </Box>
    </>
  );
}

export default Hero;
