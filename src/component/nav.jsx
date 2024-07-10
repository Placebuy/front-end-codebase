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
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [display, setDisplay] = useState('none');

  // Dynamic text and background colors
  const textColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const linkHoverColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Flex
      flexDirection={isLargerThan768 ? 'row' : 'column'}
      justifyContent={isLargerThan768 ? 'space-evenly' : 'center'}
      alignItems='center'
      w='100%'
      backgroundColor={bgColor}
      pos="fixed"
      pt={2}
      pb={2}
      zIndex={1000}
    >
      <Box
        ml={isLargerThan768 ? 60 : 0}
        mb={isLargerThan768 ? 0 : 3}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Link to='/'>
          <Image
            src='/Image/Placebuy_Horizontal.png'
            width={'100px'}
          />
        </Link>
      </Box>
      
      <Box
        maxW="lg"
        mx="auto"
        mt={isLargerThan768 ? 2 : 3}
        display={{ base: 'none', lg: 'flex' }}
        flexDirection='row'
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
        display={{ base: 'none', lg: 'flex' }}
        gap={5}
        mr={isLargerThan768 ? 20 : 0}
        mt={isLargerThan768 ? 0 : 3}
        alignItems='center'
      >
        <Box fontSize={30}>
          <i className="bi bi-cart"></i>
        </Box>
        
        <Text mt={3} color={textColor}>
          <Link
            to='/Login'
            style={{ color: linkHoverColor }}
            _hover={{ textDecoration: 'underline' }}
          >
            Sign In
          </Link>
        </Text> 
        
        <Button colorScheme='orange' variant='solid' pl={10} pr={10}>
          Sell
        </Button>
        
        {/* Color Mode Toggle */}
        <IconButton
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
        />
      </Box>

      {/* Mobile Responsive Content */}
      <Flex 
        align='center' 
        justifyContent='space-between' 
        width='100%' 
        px={4} 
        display={{ base: 'flex', lg: 'none' }}
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
        </Box>
      </Flex>

      {/* Responsive Navigation */}
      <Flex
        w="100vw"
        bgColor={bgColor}
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
          <Text mt={3} color={textColor}>
            <Link to='/'>
              Home
            </Link>
          </Text> 
        
          <Text mt={3} color={textColor}>
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
