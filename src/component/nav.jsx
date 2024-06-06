import {
  Flex,
  Box,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Flex
      flexDirection={isLargerThan768 ? 'row' : 'column'}
      justifyContent={isLargerThan768 ? 'space-evenly' : 'center'}
      alignItems='center'
      m={3}
      backgroundColor='white'
    >
      <Box
        ml={isLargerThan768 ? 60 : 0}
        mb={isLargerThan768 ? 0 : 3}
      >
        <Link to='/'>
          <Image
          src='/Image/Placebuy_Logo.png'
          width={'50px'}
        />
        
        </Link>  
        
      

      </Box>
      
      <Box
        maxW="lg"
        mx="auto"
        mt={isLargerThan768 ? 2 : 3}
        display='flex'
        flexDirection={isLargerThan768 ? 'row' : 'column'}
        gap={5}
        alignItems='center'
      >
        <InputGroup>
          <Input
            placeholder="Search"
            variant="outline"
            size="md"
            colorScheme='orange'
          />
          <InputRightElement pointerEvents="none">
            <i className="bi bi-search"></i>
          </InputRightElement>
        </InputGroup>

        <Button
          variant='outline'
          p={5}
        >
          Categories
          <i className="bi bi-arrow-down-short"></i>
        </Button>
      </Box>

      <Box
        display='flex'
        gap={5}
        mr={isLargerThan768 ? 20 : 0}
        mt={isLargerThan768 ? 0 : 3}
      >
        <Box fontSize={30}>
          <i className="bi bi-cart"></i>
        </Box>
        
        <Text mt={3}>
          <Link
            to='/Login'
            color="teal.500"
            _hover={{ textDecoration: 'underline' }}
          >
            Sign In
          </Link>
        </Text> 
        
        <Button
          colorScheme='orange'
          variant='solid'
          pl={10}
          pr={10}
        >
          Sell
        </Button>
      </Box>
    </Flex>
      

      
    // </nav>
  );
};

export default Nav;
