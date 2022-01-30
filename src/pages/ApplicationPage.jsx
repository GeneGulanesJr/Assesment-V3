import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Input,
} from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import {collection, onSnapshot, query, where} from "firebase/firestore";
import { db } from "../utils/init-firebase";
import UpdateClient from "./UpdateClient";
import DataTable from "react-data-table-component";
import LTOForm from "./Forms/LTOForm";
import {useAuth} from "../contexts/AuthContext";
import LTOFormsCreate from "./Forms/LTOFormsCreate";

export default function ApplicationPage() {
    const { currentUser } = useAuth()
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);


    const fetchData = () => {
        const userData = []
        const q = query(collection(db, "applications"), where("id", "==", currentUser.uid))
        onSnapshot(q, (snapshot) => {
            snapshot.forEach((doc) => {
                userData.push(doc.data())
            })
            setTargetClient(userData)
        })

    };

    useEffect(() => {
        fetchData();
    }, []);

    const columns = useMemo(
        () => [

            {
                name: "Status",
                selector: (row) => row.status,
                sortable: true,
                grow: 2,
            },
            {
                name: "ApplicationType",
                selector: (row) => row.ApplicationType,
                sortable: true,
                grow: 2,
            },

        ],
        []
    );


    return (

        <Layout>

            <Flex pb={5}>
                <Heading >
                My Application List
                </Heading>
                <Spacer />
                <HStack>
                    <Input
                        type="text"
                        placeholder="Search List"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <LTOFormsCreate />
                </HStack>
            </Flex>

            <DataTable
                highlightOnHover
                pagination
                direction="ltr"
                responsive
                striped
                columns={columns}
                data={targetClient.filter((value) => {
                    if (filterText === "") {
                        return value;
                    } else if (
                        value.ApplicationType &&value.ApplicationType
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    } else if (
                        value.firstname &&      value.firstname
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    )
                    {
                        return value;
                    }
                    else if (
                        value.status &&      value.status
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    )
                    {
                        return value;
                    }
                    else if (
                        value.lastname &&      value.lastname
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    )
                    {
                        return value;
                    }



                })}

            />
        </Layout>
    )
}
