import React, { useState } from 'react';
import { Box, Text, FormControl, Input, Button, VStack, FormErrorMessage } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NewpassOTP() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP submission logic here
    if (otp === '') {
      setError(true);
    } else {
      setError(false);
      // Process OTP
      console.log('OTP submitted:', otp);
    }
  };

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
        padding={8}
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
          // mb={10}
        >
          Reset Password    
        </Text>

        <Text as='p'>
          We sent you an OTP to the provided mail address 
        </Text>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4} width="100%" align="stretch">
            <FormControl isInvalid={error}>
              <Input
                type="number"
                placeholder="Input OTP"
                padding={4}
                fontSize={{ lg: "lg", md: "md", sm: "sm" }}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                width="100%"
              />
              {error && <FormErrorMessage>OTP is required.</FormErrorMessage>}
            </FormControl>

            <Text as='p'>
              Didn’t receive any mail? <a href="#" style={{ color: 'orange' }}>Resend</a>
            </Text>

            {/* <Link to='/Newpass'> */}
              <Button
              colorScheme="orange"
              width="100%"
              padding={4}
              mt={4}
              fontSize="xl"
              type="submit"
            >
              Continue
            </Button>
            
            {/* </Link> */}
            
          </VStack>
        </form>
        
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

export default NewpassOTP;
