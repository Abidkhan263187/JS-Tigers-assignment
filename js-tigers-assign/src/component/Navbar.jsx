import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {

  const handleLogout=()=>{
    sessionStorage.setItem('userName',JSON.stringify(""));
    window.location.href('/login')
  }
  const userName=JSON.parse(sessionStorage.getItem('userName'))
  return (
    <Flex backgroundColor={'black'} color={'white'} fontWeight={'700'} justifyContent={'space-between'}  p={'10px 30px'}>
     <Box>JS TIGERS</Box>
     <Flex justifyContent={'space-between'} w={'20%'}>
        <Link to={'/form'}> Form</Link>
        <Link to={'/'}>Home</Link>
       {userName ?(<Link to={'/login'} onClick={()=>handleLogout()}>{userName} (Logout)</Link>):(<Link to={'/login'}>Login</Link>) } 
     </Flex>
    </Flex>
  )
}
