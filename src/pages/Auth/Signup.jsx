import React from 'react';
import { Box, Text, FormControl, Input, Button, Image } from '@chakra-ui/react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Signup() {
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
          Sign Up on
          <span style={{ color: 'orange' }}> PlaceBuy</span>
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
          <Button
            colorScheme="orange"
            width="100%"
            padding={4}
            mt={4}
            fontSize="xl"
          >
            Sign Up
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
              src="/public/Image/svg/google-color.svg"
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
            Already have an account? <a href="/signin" style={{ color: 'orange' }}>Sign in</a>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
