import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Input,
} from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import {collection, onSnapshot,where,query} from "firebase/firestore";
import { db } from "../utils/init-firebase";
import UpdateClient from "./UpdateClient";
import DataTable from "react-data-table-component";
import LTOForm from "./Forms/LTOForm";

import {useAuth} from "../contexts/AuthContext";


export default function Applicants() {
    const { currentUser } = useAuth()
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);


    const Data = () => {
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
        Data();
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row.firstName,
                sortable: true,
                grow: 2,
            },
            {
                name: "Last Name",
                selector: (row) => row.lastName,
                sortable: true,
                grow: 2,
            },
            {
                name: "Status",
                selector: (row) => row.status,
                sortable: true,
                grow: 2,
            },
            {
                name: "Actions",
                cell: (works) => <HStack>
                    <UpdateClient works={works} />
                    <LTOForm works={works} />
                </HStack>
            },
        ],
        []
    );



    return (

        <Layout>

            <Flex pb={5}>
                <Heading >
               Applicant List
                </Heading>
                <Spacer />
                <HStack>
                    <Input
                        type="text"
                        placeholder="Search List"
                        onChange={(e) => setFilterText(e.target.value)}
                    />

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
                        value.first
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    } else if (
                        value.last
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    }
                })}

            />
        </Layout>
    )
}
