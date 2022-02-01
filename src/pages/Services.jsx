import {
    Badge,
    Heading,

} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import Love from '../Assets/love.gif'
import {Card} from "../components/Card";


export default function Services() {

    var sectionStyle = {
        width: "100%",
        height: "400px",

    };


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
                    User Services
                    </Badge>
                </Heading>




                    <img src={Love} alt="Banner" width={1300}></img>




            </Layout>
        )


}
