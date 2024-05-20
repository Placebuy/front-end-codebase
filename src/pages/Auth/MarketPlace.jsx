import React from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button, Flex, IconButton, VStack } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function MarketPlaceForm() {
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
      backgroundColor="gray.100"
      padding={4}
    >
      <Box
        width={{ base: '90%', md: '500px' }}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        padding={8}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          marginBottom={6}
          lineHeight={1}
        >
          Few more details and you can continue to the market place.
        </Text>
        
        <VStack spacing={4} align="stretch">
          <FormControl>
            {/* <FormLabel>Full name</FormLabel> */}
            <Input type="text" placeholder="Full name" />
          </FormControl>

          <FormControl>
            {/* <FormLabel>Business name</FormLabel> */}
            <Input type="text" placeholder="Business name" />
          </FormControl>

          <FormControl>
            {/* <FormLabel>Institution</FormLabel> */}
            <Input type="text" placeholder="Institution" />
          </FormControl>

          <FormControl>
            <FormLabel>Upload Document</FormLabel>
            <Flex alignItems="center"
            
            >
              <IconButton
                icon={<FaUserCircle />}
                isRound
                size="lg"
                marginRight={2}
                
              />
              <Input type="file" />
            </Flex>
          </FormControl>

          <Button
            colorScheme="orange"
            size="lg"
            width="100%"
            marginTop={4}
          >
            Continue to market place
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default MarketPlaceForm;
