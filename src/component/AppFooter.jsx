import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function AppFooter() {
  return (
    <Box as="footer" mt={10} backgroundColor="black" width="100%">
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        padding={{ base: 10, lg: 20 }}
      >
        <Box width={{ base: '100%', lg: '50%' }} mb={{ base: 10, lg: 0 }}>
          <Link to="/">
            <Image src="/Image/Placebuy_Logo.png" width="50px" />
          </Link>

          <Text as="p" color="white" mt={10}>
            An online platform where higher institute students in Nigeria can sell their products both used and brand-new products. This platform connects buyers and sellers of higher institutes.
          </Text>

          <Box color="orange" display="flex" gap={2} fontSize="20px" mt={5}>
            <i className="bi bi-google"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: 10, lg: 20 }}
          ml={{ lg: '20', base: '0' }}
        >
          <Box>
            <Text as="h5" color="white" mb={2}>
              Shop
            </Text>
            <Text as="p" color="white">
              Books
            </Text>
            <Text as="p" color="white">
              Furniture
            </Text>
            <Text as="p" color="white">
              Clothing
            </Text>
            <Text as="p" color="white">
              Electronics
            </Text>
          </Box>
          <Box>
            <Text as="h5" color="white" mb={2}>
              Sell on PlaceBuy
            </Text>
            <Text as="p" color="white">
              Books
            </Text>
            <Text as="p" color="white">
              Furniture
            </Text>
            <Text as="p" color="white">
              Clothing
            </Text>
            <Text as="p" color="white">
              Electronics
            </Text>
          </Box>

          <Box>
            <Text as="h5" color="white" mb={2}>
              Contact
            </Text>
            <Text as="p" color="orange">
              +234 xxx xxx xxx
            </Text>
            <Text as="p" color="orange">
              +234 xxx xxx xxx
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AppFooter;
