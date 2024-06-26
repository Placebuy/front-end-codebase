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
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [display, setDisplay] = useState('none');
  
  return (
    <Flex
      flexDirection={isLargerThan768 ? 'row' : 'column'}
      justifyContent={isLargerThan768 ? 'space-evenly' : 'center'}
      alignItems='center'
      w='100%'
      backgroundColor='white'
      pos="fixed"
      pt={2}
      pb={2}
    >
      <Box
        ml={isLargerThan768 ? 60 : 0}
        mb={isLargerThan768 ? 0 : 3}
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
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
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
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

        <Button variant='outline' p={5}>
          Categories
          <i className="bi bi-arrow-down-short"></i>
        </Button>
      </Box>

      <Box
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
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
            style={{ color: "teal.500" }}
            _hover={{ textDecoration: 'underline' }}
          >
            Sign In
          </Link>
        </Text> 
        
        <Button colorScheme='orange' variant='solid' pl={10} pr={10}>
          Sell
        </Button>
      </Box>

      {/* Mobile Responsive Content */}
      <Flex 
  align='center' 
  justifyContent='space-between' 
  width='100%' 
  px={4} 
  display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
>
  <InputGroup width='70%'>
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
  
  <Box display='flex' alignItems='center' gap={4}>
    <Box fontSize={20}>
      <i className="bi bi-cart"></i>
    </Box>
    
    <IconButton
      aria-label='open Menu'
      size="lg"
      icon={<HamburgerIcon />}
      onClick={() => setDisplay('flex')}
    />
    
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  </Box>
</Flex>


      {/* Responsive Navigation */}
      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="50vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify={'flex-end'}>
          <IconButton
            mt={2}
            mr={2}
            aria-label='Close Menu'
            icon={<CloseIcon />}
            onClick={() => setDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Text mt={3}>
            <Link to='/'>
              Home
            </Link>
          </Text> 
        
          <Text mt={3}>
            <Link to='/'>
              About Us
            </Link>
          </Text>

          <Button colorScheme='orange' variant='solid' pl={10} pr={10}>
            <Link to='/Login'>
              Sign In
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
