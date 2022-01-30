import {
    Badge,
    Heading,

} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import Love from '../Assets/love.gif'
import {Card} from "../components/Card";


export default function Services() {
    const getRole= sessionStorage.getItem('name')
    const tt = JSON.parse(getRole);

    const userRole= tt[0].Role;



    if(userRole=== 'Admin'){
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
                      AN admin
                    </Badge>
                </Heading>

                <Card maxW='md' mx='auto' mt={4}>
                    <Heading size='md' mt={8}>
                        <img src={Love} alt="Banner"></img>
                    </Heading>
                </Card>


            </Layout>
        )
    }else if (userRole==='User'){
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
                       An user
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

}
