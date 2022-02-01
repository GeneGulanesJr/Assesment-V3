import {
  Badge,
  Heading,Box,Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import banner from '../Assets/Banner.jpg'
import { Flex, Spacer } from '@chakra-ui/react'
export default function Homepage() {
  return (
    <Layout>
      <Heading>
        <Badge
          fontWeight='black'
          fontSize='4xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
            Love - Licensing Of Vehicle for Everyone,
        </Badge>
      </Heading>

      <Heading size='md' mt={8}>
          <img src={banner} alt="Banner"></img>
      </Heading>

        <Box>

            <Flex>

<Text>Start-up LOVE, an acronym that stands for Licensing Of Vehicle for Everyone, was created
    aimed at addressing the growing demand for getting a driver's license.</Text>
                <Spacer />

            </Flex>


        </Box>

    </Layout>
  )
}
