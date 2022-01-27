import {
    Badge,
    Heading,

} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import Love from '../Assets/love.gif'
import {Card} from "../components/Card";


export default function Services() {
    return (
        <Layout>
            <Heading>Services Offered</Heading>
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

            <Card maxW='md' mx='auto' mt={4}>
                <Heading size='md' mt={8}>
                    <img src={Love} alt="Banner"></img>
                </Heading>
            </Card>


        </Layout>
    )
}
