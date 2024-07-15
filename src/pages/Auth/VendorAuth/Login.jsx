import React from 'react'
import { Box, Text, FormControl, Input, Button, Image } from '@chakra-ui/react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


function VendorLogin() {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage="url('/Image/AuthBG.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bgColor="white"
        padding={5}
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize={{ lg: "4xl", sm: "2xl" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
          mt={8}
          mb={8}
        >
          Log In
          {/* <span style={{ color: 'orange' }}> PlaceBuy</span> */}
        </Text>

        <FormControl
          width="80%"
          mb={6}
        >
          <Input
            type="email"
            placeholder="Email Address"
            padding={4}
            mb={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
          />
          <Input 
            type="password"
            placeholder="Password"
            padding={4}
            mb={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
          />
          
          <Link to='/NewpassOTP'>
            Forgot Your Password?
          </Link>

          <Button
            colorScheme="orange"
            width="100%"
            padding={4}
            mt={4}
            fontSize="xl"
          >
            Log In
          </Button>
        </FormControl>

        <Box width="80%" textAlign="center">

          <Text
            fontSize={{ lg: "lg", sm: "md" }}
            fontWeight="bold"
            mt={12}
          >
            Don't have an account? <a href="/signin" style={{ color: 'orange' }}>
              <Link to='/VendorSignup'>
                Sign Up
              </Link>
              </a>
          </Text>
          
          <Text
            mt={10}
           _hover={{ textDecoration: 'underline', color: 'orange' }}
          >
            <Link to='/'
              pl={5}
              fontWeight='200'
            > Back to Home
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default VendorLogin