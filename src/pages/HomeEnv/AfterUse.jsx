import { Box, Text, Button,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function AfterUse() {

  const textColor = useColorModeValue('black', 'white');
  const StextColor = useColorModeValue ('black')
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const heroBgColor = useColorModeValue('#FAFAFA', 'gray.700');

  return (
    <>
      <Box
        margin='auto'
        mt={10}
        height={{ lg: "308px", md: "200px", sm: "200px" }}
        width="100%"
        backgroundImage="url('/Image/BeforeFooter.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"

      >

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            m='6%'
          >

            <Text as='h1'
            color={'black'}
            >
            Become a Vendor on Placebuy 
          </Text>

          <Text as='p' color={'black'}>
            Sell your product to students across universities with placebuy 
          </Text>

          <Button
            colorScheme="orange"
            // width="100%"
            padding={4}
            mt={2}
              fontSize="xl"
              mb={5}
            >
              <Link to='/Signup'>
            Sign Up  
              </Link>
            
          </Button>


          </Box>
          
        </Box>

      </Box>
    
    </>
  )
}

export default AfterUse