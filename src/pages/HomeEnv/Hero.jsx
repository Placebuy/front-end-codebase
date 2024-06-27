import { Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'

function Hero() {
  return (
    <>
      <Box
      backgroundImage="linear-gradient(to bottom, rgba(227, 86, 58, 1), rgba(227, 86, 58, 0.05))"
        height={{lg:"508px", md:"400px", sm: "380px"}}
        width="100%"
      >
        <Flex
      display='flex'
      flexDir={{ lg: 'row', md: 'row', sm: 'column' }}
      margin="auto"
      alignItems={{ sm: 'center' }}
      justifyContent={{ sm: 'center' }}
    
    >
      <Box
        ml={{ lg: '50px', md: '50px', sm: '0' }}
        display='flex'
        flexDir='column'
        justifyContent={{ lg: 'none', md: 'center', sm: 'center' }}
        alignItems={{ lg: 'flex-start', md: 'flex-start', sm: 'center' }}
        textAlign={{ sm: 'center' }}
      >
        <Text
          as='h2'
          fontWeight={700}
          fontFamily='revert-layer'
          fontSize={{ lg: '50px', md: '50px', sm: '35px' }}
          mt={20}
        >
          BUY AND SELL ANYTHING, <br />ALL ON PLACEBUY
        </Text>

        <Text
          as='p'
          fontWeight={500}
          fontSize='20px'
          mt={10}
          w='85%'
        >
          Sign up on placebuy and get a free slot to sell any product of your choice.
        </Text>

        <Button
          mt={5}
          colorScheme='orange'
          variant='solid'
          pl={20}
          pr={20}
        >
          Sell
        </Button>
      </Box>

          <Image
            mt={20}
        src='/Image/HeroImg.png'
        width={{ lg: '40%', md: '45%', sm: 'none' }}
        display={{ lg: 'flex', md: 'none', sm: 'none' }}
      />
    </Flex>

    </Box>
    
    </>
  )
}

export default Hero