import { Box, Button, Text, 
  useColorModeValue, } from '@chakra-ui/react'
import React from 'react'

function Pupup(props) {

  // Dynamic text and background colors
  const textColor = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const BGcolor = useColorModeValue ('#F0EAD8', 'gray.800')
  const linkHoverColor = useColorModeValue('teal.500', 'teal.300');


  return (props.trigger) ? (
    <>
      <Box
        position={'fixed'}
        top={0}
        left={0}
        width='100%'
        height='100vh'
        // bgColor='rgba(0, 0, 0, 0,2)'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >

        <Box
          position={'relative'}
          p='32px'
          width='100%'
          maxW={'640px'}
          height={'500px'}
          // bgColor={'teal.500'}
          bgColor={BGcolor}
          color={textColor}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Button
            pos={'absolute'}
            top={'16px'}
            right={'16px'}
            onClick={()=> props.setTrigger(false)}
          >
            X
          </Button>

        {props.children}


        </Box>
        
      </Box>
    
    </>
  ) : "";
}

export default Pupup