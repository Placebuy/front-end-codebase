import React from 'react'
import { Box, Text, FormControl, Input, Button, Image, Checkbox } from '@chakra-ui/react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Forgot() {
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
          fontSize={{ lg: "2xl", sm: "lg" }}
          fontWeight="bold"
          color="black"
          textAlign="center"
          mt={8}
        >
          It Feels Good To Have You Back!
          {/* <span style={{ color: 'orange' }}> PlaceBuy</span> */}
        </Text>

        <Text
          // display="flex"
          textAlign="center"
          fontSize="xs"
          fontWeight="sem"
          mb={10}  
        >
          Kindly Input Your Email and Password to Login
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
          
          <Checkbox
            size='md'
            colorScheme='blue'
            mt={3}
          
          >
            Remember me
          </Checkbox>

          <Button
            colorScheme="orange"
            width="100%"
            padding={4}
            mt={8}
            fontSize="xl"
          >
            Sign In
          </Button>
        </FormControl>

        <Box width="80%" textAlign="center">
          <Text
            fontSize="sm"
            mt={6}
            mb={6}
            fontWeight="bold"
          >
            Alternatively
          </Text>

          <Button
            colorScheme="gray"
            padding={6}
            width="100%"
            display="flex"
            alignItems="center"
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
            mb={4}
          >
            <Image
              src="Image/svg/google-color.svg"
              width={6}
              mr={2}
            />
            Sign Up with Google
          </Button>

          <Text
            fontSize={{ lg: "lg", sm: "md" }}
            fontWeight="bold"
            mt={12}
          >
            Already have an account?
            <Link to='/Login'>
              
            Sign Up
            </Link>
            
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Forgot