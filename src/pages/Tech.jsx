import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack, Badge, List,  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react'
import { Link} from 'react-router-dom'
import { Layout } from '../components/Layout'


export default function Tech() {
    return (
        <Layout>

            <Box p={4}>
                <Heading>TechStack Used</Heading>
                <Table variant='striped' colorScheme='teal'>

                    <Thead>
                        <Tr>
                            <Th>React</Th>
                            <Th>Description</Th>

                        </Tr>
                    </Thead>
                    <Tbody>

                        <Tr>
                            <Td>Firebase</Td>
                            <Td> Use for user authentication and backend storage</Td>

                        </Tr>

                        <Tr>
                            <Td>Vercel</Td>
                            <Td>Used for web hosting.</Td>

                        </Tr>

                        <Tr>
                            <Td>Chakra-Ui</Td>
                            <Td>UI Theme for React.</Td>

                        </Tr>

                        <Tr>
                            <Td>PHPStorm</Td>
                            <Td>IDE Used</Td>

                        </Tr>
                        <Tr>
                            <Td>Canva</Td>
                            <Td>Use to create image/video assets.</Td>

                        </Tr>
                        <Tr>
                            <Td>Formik</Td>
                            <Td>Used to create forms easily.</Td>

                        </Tr>
                        <Tr>
                            <Td>React-data-table-component</Td>
                            <Td>Used to display tables with search/filter functions.</Td>

                        </Tr>


                    </Tbody>

                </Table>

            </Box>




        </Layout>
    )
}
