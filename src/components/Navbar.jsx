import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import Navlink from './Navlink'

export function Navbar() {
  const { toggleColorMode } = useColorMode()
  const { logout, currentUser } = useAuth()


  return (



    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      py={4}
    >
      <HStack
        justifyContent='flex-end'
        maxW='container.lg'
        mx='auto'
        spacing={4}
      >
        <Spacer />





        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser && <Navlink to='/profile' name='Profile' />}
        {currentUser && <Navlink to='/' name='Homepage' />}
        {currentUser && <Navlink to='/services' name='Services Offered' />}
        {currentUser && <Navlink to='/contact' name='Contact Information' />}
        {currentUser && <Navlink to='/tech' name='Technology Stack' />}
        {currentUser &&  <Navlink to='/application' name='Application Page' />}

        {currentUser && ( <Navlink to='/logout'  name='Logout'  onClick={async e => {
              e.preventDefault()
              await logout()
              sessionStorage.removeItem('name');
              sessionStorage.removeItem('tesr');
            }}    /> )}


        <IconButton
          variant='ghost'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        />
      </HStack>
    </Box>
  )
}
