import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Input,
} from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/init-firebase";

import UpdateClient from "./UpdateClient";

import DataTable from "react-data-table-component";
import LTOForm from "./Forms/LTOForm";


export default function AdminApplicationPage() {
    const getRole= sessionStorage.getItem('name')
    const tt = JSON.parse(getRole);

    const userRole= tt[0].Role;

    const [filterText, setFilterText] = useState("");
    const [adminTargetClient, setadminTargetClient] = useState([]);
    const AdminData = () => {
        const usersCollectionRef = collection(db, "users");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setadminTargetClient(userData)
        })
    };

    useEffect(() => {
        AdminData();
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row.firstname,
                sortable: true,
                grow: 2,
            },
            {
                name: "Last Name",
                selector: (row) => row.lastname,
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
                name: "ApplicationType",
                selector: (row) => row.ApplicationType,
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

if(userRole==="Admin"){ return (

    <Layout>

        <Flex pb={5}>
            <Heading >
                Target Client List
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
            data={
                adminTargetClient.filter((value) => {
                    if (filterText === "") {
                        return value;
                    } else if (
                        value.firstname && value.firstname
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    } else if (
                        value.lastname && value.lastname
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    ) {
                        return value;
                    }
                })
            }

        />
    </Layout>
)

}else if(userRole==='User'){
    return(
        <h1>Go Back you are not an admin</h1>
    )
}

}