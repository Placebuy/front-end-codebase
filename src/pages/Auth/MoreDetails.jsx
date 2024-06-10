import React from 'react'
import { Box, Text, FormControl, Input, Button, VStack, FormErrorMessage } from '@chakra-ui/react';


function MoreDetails() {
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
          fontSize= "lg"
          fontWeight="bold"
          color="black"
          textAlign="center"
          mt={8}
          mb={10}
        >
          Few More details and you can continue <br/> to the market place 
        </Text>

        <FormControl
          width="80%"
          mb={6}
        >
          <Input
            type="text"
            placeholder="Full Name"
            padding={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
            mb={8}
          />

          <Input
            type="text"
            placeholder="Institution"
            padding={4}
            fontSize={{ lg: "lg", md: "md", sm: "sm" }}
          />

          <Button
            colorScheme="orange"
            width="100%"
            padding={4}
            mt={4}
            fontSize="xl"
          >
            Continue to market place
          </Button>
        </FormControl>
        
      </Box>
    </Box>
  )
}

export default MoreDetails