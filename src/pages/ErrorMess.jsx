import { Box, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

function ErrorMess() {
  return (
    <>
      <Box
        margin='20'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text as='h3'
          textAlign='center'
          mb={10}
        >
          The Page you are looking for is no longer available <br />or <br />they might have been a mistake in your URL (Check it again)
        </Text>

        <Link to='/'
        width={{ lg: '10%' }}
        >
          <Button>
            Back to Home
          </Button>
        </Link>
      </Box>
    
    </>
  )
}

export default ErrorMess