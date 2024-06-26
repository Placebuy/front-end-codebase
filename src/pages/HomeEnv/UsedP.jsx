import { Box, Image, Text, SimpleGrid, Icon, ButtonGroup, Button, Divider } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { UsedProductData } from '../Datafiles/Usedp';
import React from 'react'

function UsedP() {
  return (
    <>
      <Box
        mt={10}
        ml={10}
        mr={10}
      >
        <Text
          as='h4'
          mt={5}
        >
          Used Product Listing
        </Text>
        
        <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing='40px' mt={5}
    >
      {UsedProductData.map((data, index) => {
        const { image, text, text2, Button1, Button2 } = data;

        return (
          <Box key={index}
            boxShadow='md'
            width={{ base: '80%', sm: '100%' }}
            mx='auto'
          >
            <Image
              src={image}
              width='100%'
              mx='auto'
            />

            <Box
              backgroundColor='white'
              borderRadius={20}
              pos='relative'
              top='-10'
              width='100%'
              p={5}
              mx='auto' 
            >
              <Box fontSize='23px' gap={5} mb={2} ml={5}>
                <Icon as={AiFillStar} />
                <Icon as={AiFillStar} />
                <Icon as={AiFillStar} />
                <Icon as={AiFillStar} />
                <Icon as={AiOutlineStar} />
              </Box>
              
              <Box ml={5}>
                <Text as='p' mb={2} fontSize={{ lg: '15px', sm: '15px' }}>
                  {text}
                </Text>
                <Text as='p'>
                  {text2}
                </Text>
                <ButtonGroup display="flex" justifyContent='space-between' gap={3} mt={2}>
                  <Button colorScheme='orange'
                  fontSize={{lg:'15px', sm:'10px'}}
                  >
                    {Button1}
                  </Button>

                  <Button
                    fontSize={{ lg: '15px', sm: '10px' }}
                  >
                    {Button2}
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        );
      })}
        </SimpleGrid>
        
        <Divider
          orientation='horizontal'
          width='50%'
          borderBottomWidth={10}
          borderRightRadius={50}
          borderColor='#E3563A'
          mt={10}
        />
      </Box>
    </>

  )
}

export default UsedP