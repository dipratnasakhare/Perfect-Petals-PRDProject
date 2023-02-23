import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
  const naviagate = useNavigate()
    return (
        <Box h="40rem">
          <Image onClick={()=>naviagate("/")} src="https://i.pinimg.com/originals/5b/06/13/5b061391863ea0a17c5ab9d0adc6aab0.gif" /> 
        </Box>
    )
}
