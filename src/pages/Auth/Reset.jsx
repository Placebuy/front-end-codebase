import React from 'react'
import { Box, Text, FormControl, Input, Button, VStack, FormErrorMessage } from '@chakra-ui/react';


function Reset() {
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
        width={{ base: "90%", md: "500px" }}
      >
        <Text
          fontSize= "3xl"
          fontWeight="bold"
          color="black"
          textAlign="center"
          mt={8}
        >
          Reset Password       
        </Text>

        <Text
          // display="flex"
          textAlign="center"
          fontSize="xs"
          // fontWeight="bold"
          mb={10}
          
        >
          No worries, we'll help you reset your password  <br />
          to enable you login
        </Text>

        <FormControl
          width="80%"
          mb={6}
        >
          <Input
            type="number"
            placeholder="Input OTP"
            padding={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
          />

          {/* <Text
            fontSize="xs"
            fontWeight="bold"
            mt={2}
          >
            Didn't receive any mail?
           <a href="#" style={{ color: 'orange' }}> Resend</a>
          </Text> */}
          <Button
            colorScheme="orange"
            width="100%"
            padding={4}
            mt={4}
            fontSize="xl"
          >
            Continue
          </Button>
        </FormControl>
        
        <Text
          fontSize={{ lg: "lg", md: "md", sm: "xs" }}
          fontWeight="bold"
          mt={12}
          
          >
          Don't have an account?
          
          {/* <a href="/signin"
            style={{
              color: 'orange', 
              marginLeft: "4px"
            }} 
          >  */}
            Sign Up
          {/* </a> */}
          </Text>
      </Box>
    </Box>
  )
}

export default Reset