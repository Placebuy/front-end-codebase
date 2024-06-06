import { Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function AfterUse() {
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

            <Text as='h1'>
            Become a Vendor on Placebuy 
          </Text>

          <Text as='p'>
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