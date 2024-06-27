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
  Center
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

        <Button
          variant='outline'
          p={5}
        >
          Categories
          <i className="bi bi-arrow-down-short"></i>
        </Button>
      </Box>

      

      <Box
        // display='flex'
        gap={5}
        mr={isLargerThan768 ? 20 : 0}
        mt={isLargerThan768 ? 0 : 3}
           display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
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
        
        <Button
          colorScheme='orange'
          variant='solid'
          pl={10}
          pr={10}
        >
          Sell
        </Button>
      </Box>


      {/* Mobile Responsive COntent */}

      <Flex
        align='center'
        gap={200}
      >

        <Flex
          align='center'
          gap={10}
        >
        <InputGroup
          display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
          w={"50vw"}
      >
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
        
         <Box fontSize={20}>
          <i className="bi bi-cart"></i>
        </Box>  
        </Flex>
        
        <Flex
          align='center'
          gap={2}
        >
          <IconButton
        aria-label='open Menu'
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
        onClick={() => setDisplay('flex')}
      />
      
      <IconButton
        // position="fixed"
        // top={4}
        // right={4}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label="Toggle Theme"
        // colorScheme="green"
        onClick={toggleColorMode}
      />
          
      </Flex>
      

      </Flex>
      

      

      {/* RESPONSIVE NAV */}
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

          <Button
            colorScheme='orange'
            variant='solid'
            pl={10}
            pr={10}
          >
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
