import React from 'react';
import { Box, Text, FormControl, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Authotp() {
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
          fontSize="3xl"
          fontWeight="bold"
          color="black"
          textAlign="center"
          mt={8}
        >
          Verify Your Mail
        </Text>

        <Text
          textAlign="center"
          fontSize="xs"
          mb={10}
        >
          Check we sent you an OTP to your mail. <br />
          It'll take just a minute.
        </Text>

        <FormControl width="80%" mb={6}>
          <Input
            type="number"
            placeholder="Enter OTP"
            padding={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
          />
        </FormControl>

        <Text fontSize="xs" fontWeight="bold" mt={2}>
          Didn't receive any mail?
          <a href="#" style={{ color: 'orange' }}> Resend</a>
        </Text>

        <Button
          colorScheme="orange"
          width="100%"
          padding={4}
          mt={4}
          fontSize="xl"
        >
          Verify
        </Button>

        <Text
          fontSize={{ lg: "lg", md: "md", sm: "xs" }}
          fontWeight="bold"
          mt={12}
        >
          Already have an account?
          <Link to='/login' style={{ color: 'orange', marginLeft: "4px" }}>
            Sign in
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Authotp;
