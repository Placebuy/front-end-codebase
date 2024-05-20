import React, { useState } from 'react';
import { Box, Text, FormControl, Input, Button, VStack, FormErrorMessage } from '@chakra-ui/react';

function Newpass() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Continue with the password reset process
      console.log('Password reset successful');
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
          mb={10}
        >
          Create New Password    
        </Text>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4} width="100%" align="stretch">
            <FormControl isInvalid={error}>
              <Input
                type="password"
                placeholder="New Password"
                padding={4}
                fontSize={{ lg: "lg", md: "md", sm: "sm" }}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                width="100%"
              />
            </FormControl>

            <FormControl isInvalid={error}>
              <Input
                type="password"
                placeholder="Confirm New Password"
                padding={4}
                fontSize={{ lg: "lg", md: "md", sm: "sm" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                width="100%"
              />
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>

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
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Newpass;
