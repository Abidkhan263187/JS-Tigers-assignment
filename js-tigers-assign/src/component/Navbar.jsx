import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <Flex backgroundColor={'black'} color={'white'} fontWeight={'700'} justifyContent={'space-between'}  p={'10px 30px'}>
     <Box>logo</Box>
     <Flex justifyContent={'space-between'} w={'20%'}>
        <Link to={'/form'}> Form</Link>
        <Link to={'/'}>Home</Link>
        <Link>Login</Link>
     </Flex>
    </Flex>
  )
}
