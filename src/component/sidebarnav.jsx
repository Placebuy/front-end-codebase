import { Button, Divider, Flex, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiMenu} from 'react-icons/bi';

function sidebarnav() {
  const [navSize, setNavSize] = useState('large')
  return (
    <Flex
      pos='sticky'
      left='5'
      h='95vh'
      marginTop='2.5vh'
      boxShadow='orange'
      borderRadius={navSize == 'small' ? "15px" : "30px"}
      w={navSize == 'small' ? "75px" : "200px"}
      flexDir='column'
      justifyContent='space-between'
    >

      <Flex
        p='5%'
        flexDir='column'
        alignItems='flex-start'
        as='nav'
      
      >
       <IconButton
        background='none'
        mt={5}
        _hover={{ background: 'none' }}
          icon={<BiMenu />}
          onClick={() => {
            if (navSize == "small")
              setNavSize("large")
            else
              setNavSize("small")
          }}
      />
        
      </Flex>
      
      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems='flex-start'
      >
        <Divider display={navSize == 'small' ? "none" : "200px"}/>

        <Button mt={4} align="center">
          Sign Up
        </Button>        
      </Flex>

    </Flex>
  )
}

export default sidebarnav