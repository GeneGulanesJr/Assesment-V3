import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
    Stack,
    FormControl, Box, Center,
    FormLabel,
    Input,
    FormErrorMessage,
    useToast,
    useColorModeValue, SimpleGrid, Heading,
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {AddIcon} from "@chakra-ui/icons";
import React from 'react'
import {Field, Form, Formik} from "formik";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../utils/init-firebase";
import {useAuth} from "../../contexts/AuthContext";
import { v4 as uuidv4 } from 'uuid';


export default function LTOFormsCreate() {
    const { currentUser } = useAuth()
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    async  function updateUsers2(values) {

        const userRef = doc(db, 'applications',uuidv4());
        await  setDoc(userRef,{
            ...values,
            id:currentUser.uid,
            status: 'pending'
        })
    }



    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <AddIcon />
            </Button>



            <Modal isOpen={isOpen} onClose={onClose} size='full'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Application for Student Driver's Permit/Driver's Licence/ Conductor's Licence </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid minChildWidth='120px' spacing='40px'>
                            <Box
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                rounded={'md'}
                                overflow={'hidden'}
                                boxShadow={'lg'}>

                                <Stack spacing='24px'>
                                    <Formik
                                        initialValues={{

                                        }}
                                        onSubmit={(values, actions) => {
                                            updateUsers2(values)
                                                .then(() => {
                                                    toast({
                                                        title: 'Success',
                                                        description: 'User Profile Updated Successfully',
                                                        status: 'info',
                                                        duration: 9000,
                                                        isClosable: true,
                                                    })
                                                    actions.setSubmitting(false)
                                                    onClose()
                                                })

                                        }}
                                    >
                                        {(props) => (
                                            <Form>
                                                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                                                    <GridItem w='100%'  />
                                                    <Field name='ApplicationType' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.ApplicationType && form.touched.ApplicationType}>
                                                                <FormLabel htmlFor='ApplicationType'>Application Type </FormLabel>
                                                                <Select required {...field} id='ApplicationType' placeholder='Select Option'>
                                                                    <option value='New'>New</option>
                                                                    <option value='Renewal'>Renewal</option>
                                                                    <option value='Change Name'>Change Name</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.ApplicationType}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='districtOffice' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.districtOffice && form.touched.districtOffice}>
                                                                <FormLabel htmlFor='districtOffice'>District Office</FormLabel>
                                                                <Input required {...field} id='districtOffice' placeholder='districtOffice' />
                                                                <FormErrorMessage>{form.errors.districtOffice}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='lastName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                                                <FormLabel htmlFor='lastName'>Family Name</FormLabel>
                                                                <Input required {...field} id='lastName' placeholder='lastName' />
                                                                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='firstName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                                                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                                                <Input required {...field} id='firstName' placeholder='firstName' />
                                                                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='MiddleName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.MiddleName && form.touched.MiddleName}>
                                                                <FormLabel htmlFor='MiddleName'>Middle Name</FormLabel>
                                                                <Input required {...field} id='MiddleName' placeholder='MiddleName' />
                                                                <FormErrorMessage>{form.errors.MiddleName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}

                                                    </Field>
                                                    <Field name='PressentAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.PressentAddress && form.touched.PressentAddress}>
                                                                <FormLabel htmlFor='PressentAddress'>Pressent Address</FormLabel>
                                                                <Input required {...field} id='PressentAddress' placeholder='PressentAddress' />
                                                                <FormErrorMessage>{form.errors.PressentAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TelNoCpNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TelNoCpNo && form.touched.TelNoCpNo}>
                                                                <FormLabel htmlFor='TelNoCpNo'>Tel.No/CP.No</FormLabel>
                                                                <Input required {...field} id='TelNoCpNo' placeholder='TelNoCpNo' type="number"/>
                                                                <FormErrorMessage>{form.errors.TelNoCpNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TIN' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TIN && form.touched.TIN}>
                                                                <FormLabel htmlFor='TIN'>TIN Number</FormLabel>
                                                                <Input required {...field} id='TIN' placeholder='TIN' type='number'/>
                                                                <FormErrorMessage>{form.errors.TIN}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Nationality' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Nationality && form.touched.Nationality}>
                                                                <FormLabel htmlFor='Nationality'>Nationality</FormLabel>
                                                                <Select required {...field} id='Nationality' placeholder='Select Option'>
                                                                    <option value='Filipino'>Filipino</option>
                                                                    <option value='Non Filipino'>Non Filipino</option>
                                                                    <option value='Others'>Others</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.Nationality}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='SEX' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.SEX && form.touched.SEX}>
                                                                <FormLabel htmlFor='SEX'>Sex</FormLabel>
                                                                <Select required {...field} id='SEX' placeholder='Select Option'>
                                                                    <option value='Male'>Male</option>
                                                                    <option value='Female'>Female</option>
                                                                    <option value='Others'>Others</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.SEX}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Birthdate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Birthdate && form.touched.Birthdate}>
                                                                <FormLabel htmlFor='Birthdate'>Birthday</FormLabel>
                                                                <Input required {...field} id='Birthdate' placeholder='Birthdate' />
                                                                <FormErrorMessage>{form.errors.Birthdate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='HEIGHTCM' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.HEIGHTCM && form.touched.HEIGHTCM}>
                                                                <FormLabel htmlFor='HEIGHTCM'>Height(CM)</FormLabel>
                                                                <Input required {...field} id='HEIGHTCM' placeholder='HEIGHTCM' type='number'/>
                                                                <FormErrorMessage>{form.errors.HEIGHTCM}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Weight' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Weight && form.touched.Weight}>
                                                                <FormLabel htmlFor='Weight'>Weight(KG)</FormLabel>
                                                                <Input required {...field} id='Weight' placeholder='Weight' type='number' />
                                                                <FormErrorMessage>{form.errors.Weight}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='LicenceNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.LicenceNo && form.touched.LicenceNo}>
                                                                <FormLabel htmlFor='LicenceNo'>Licence Number </FormLabel>
                                                                <Input required {...field} id='LicenceNo' placeholder='LicenceNo' type='number'/>
                                                                <FormErrorMessage>{form.errors.LicenceNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='CivilStatus' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.CivilStatus && form.touched.CivilStatus}>
                                                                <FormLabel htmlFor='CivilStatus'>Civil Status</FormLabel>
                                                                <Select required {...field} id='CivilStatus' placeholder='Select Option'>
                                                                    <option value='Single'>Male</option>
                                                                    <option value='Married'>Female</option>
                                                                    <option value='Divorced'>Others</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.CivilStatus}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='Birthplace' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.Birthplace && form.touched.Birthplace}>
                                                                <FormLabel htmlFor='Birthplace'>Birth Place</FormLabel>
                                                                <Input required {...field} id='Birthplace' placeholder='Birthplace' />
                                                                <FormErrorMessage>{form.errors.Birthplace}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='FathersName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.FathersName && form.touched.FathersName}>
                                                                <FormLabel htmlFor='FathersName'>Fathers Name</FormLabel>
                                                                <Input required {...field} id='FathersName' placeholder='FathersName' />
                                                                <FormErrorMessage>{form.errors.FathersName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='MothersName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.MothersName && form.touched.MothersName}>
                                                                <FormLabel htmlFor='MothersName'>Mothers Name</FormLabel>
                                                                <Input required {...field} id='MothersName' placeholder='MothersName' />
                                                                <FormErrorMessage>{form.errors.MothersName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='SpouseName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.SpouseName && form.touched.SpouseName}>
                                                                <FormLabel htmlFor='SpouseName'>Spouse Name</FormLabel>
                                                                <Input required {...field} id='SpouseName' placeholder='SpouseName' />
                                                                <FormErrorMessage>{form.errors.SpouseName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>

                                                    <GridItem w='100%' />
                                                    <Field name='EmployersBusinessName' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmployersBusinessName && form.touched.EmployersBusinessName}>
                                                                <FormLabel htmlFor='EmployersBusinessName'>Pressent Address</FormLabel>
                                                                <Input required {...field} id='EmployersBusinessName' placeholder='EmployersBusinessName' />
                                                                <FormErrorMessage>{form.errors.EmployersBusinessName}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TelNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TelNo && form.touched.TelNo}>
                                                                <FormLabel htmlFor='TelNo'>Tel No.</FormLabel>
                                                                <Input required {...field} id='TelNo' placeholder='TelNo' type='number'/>
                                                                <FormErrorMessage>{form.errors.TelNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmployersBusinessAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmployersBusinessAddress && form.touched.EmployersBusinessAddress}>
                                                                <FormLabel htmlFor='EmployersBusinessAddress'>Employers Business Address</FormLabel>
                                                                <Input required {...field} id='EmployersBusinessAddress' placeholder='EmployersBusinessAddress' />
                                                                <FormErrorMessage>{form.errors.EmployersBusinessAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmergencyContactPerson' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactPerson && form.touched.EmergencyContactPerson}>
                                                                <FormLabel htmlFor='EmergencyContactPerson'>Emergency Contact Person</FormLabel>
                                                                <Input required {...field} id='EmergencyContactPerson' placeholder='EmergencyContactPerson' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactPerson}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmergencyContactAddress' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactAddress && form.touched.EmergencyContactAddress}>
                                                                <FormLabel htmlFor='EmergencyContactAddress'>Emergency Contact Address</FormLabel>
                                                                <Input required {...field} id='EmergencyContactAddress' placeholder='EmergencyContactAddress' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactAddress}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EmergencyContactNo' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EmergencyContactNo && form.touched.EmergencyContactNo}>
                                                                <FormLabel htmlFor='EmergencyContactNo'>Emergency Contact No</FormLabel>
                                                                <Input required {...field} id='EmergencyContactNo' placeholder='EmergencyContactNo' />
                                                                <FormErrorMessage>{form.errors.EmergencyContactNo}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='AgencyCode' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.AgencyCode && form.touched.AgencyCode}>
                                                                <FormLabel htmlFor='AgencyCode'>Agency Code</FormLabel>
                                                                <Input required {...field} id='AgencyCode' placeholder='AgencyCode' />
                                                                <FormErrorMessage>{form.errors.AgencyCode}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='IssueDate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.IssueDate && form.touched.IssueDate}>
                                                                <FormLabel htmlFor='IssueDate'>Issue Date</FormLabel>
                                                                <Input required {...field} id='IssueDate' placeholder='IssueDate' />
                                                                <FormErrorMessage>{form.errors.IssueDate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='ExpiryDate' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.ExpiryDate && form.touched.ExpiryDate}>
                                                                <FormLabel htmlFor='ExpiryDate'>Expiry Date</FormLabel>
                                                                <Input required {...field} id='ExpiryDate' placeholder='ExpiryDate' />
                                                                <FormErrorMessage>{form.errors.ExpiryDate}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='LicenceClassification' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.LicenceClassification && form.touched.LicenceClassification}>
                                                                <FormLabel htmlFor='LicenceClassification'>Licence Classification</FormLabel>
                                                                <Input required {...field} id='LicenceClassification' placeholder='LicenceClassification' />
                                                                <FormErrorMessage>{form.errors.LicenceClassification}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='DrivingSkill' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.DrivingSkill && form.touched.DrivingSkill}>
                                                                <FormLabel htmlFor='DrivingSkill'>Driving Skill</FormLabel>
                                                                <Input required {...field} id='DrivingSkill' placeholder='DrivingSkill' />
                                                                <FormErrorMessage>{form.errors.DrivingSkill}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='HighestEducationAttainment' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.HighestEducationAttainment && form.touched.HighestEducationAttainment}>
                                                                <FormLabel htmlFor='HighestEducationAttainment'>Civil Status</FormLabel>
                                                                <Select required {...field} id='HighestEducationAttainment' placeholder='Select Option'>
                                                                    <option value='Postgradute'>Postgradute</option>
                                                                    <option value='College'>College</option>
                                                                    <option value='High School'>High School</option>
                                                                    <option value='Elementary'>Elementary</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.HighestEducationAttainment}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='BloodType' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.BloodType && form.touched.BloodType}>
                                                                <FormLabel htmlFor='BloodType'>Civil Status</FormLabel>
                                                                <Select required {...field} id='BloodType' placeholder='Select Option'>
                                                                    <option value='O+'>O+</option>
                                                                    <option value='A+'>A+</option>
                                                                    <option value='B+'>B+</option>
                                                                    <option value='O-'>O-</option>
                                                                    <option value='A-'>A-</option>
                                                                    <option value='B-'>B-</option>
                                                                </Select>
                                                                <FormErrorMessage>{form.errors.BloodType}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='OrganDonor' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.OrganDonor && form.touched.OrganDonor}>
                                                                <FormLabel htmlFor='OrganDonor'>Organ Donor</FormLabel>
                                                                <Input required {...field} id='OrganDonor' placeholder='OrganDonor' />
                                                                <FormErrorMessage>{form.errors.OrganDonor}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='EyesColor' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.EyesColor && form.touched.EyesColor}>
                                                                <FormLabel htmlFor='EyesColor'>Eyes Color</FormLabel>
                                                                <Input required {...field} id='EyesColor' placeholder='EyesColor' />
                                                                <FormErrorMessage>{form.errors.EyesColor}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                    <Field name='TypeofApplication' >
                                                        {({ field, form }) => (
                                                            <FormControl isInvalid={form.errors.TypeofApplication && form.touched.TypeofApplication}>
                                                                <FormLabel htmlFor='TypeofApplication'>Civil Status</FormLabel>
                                                                <Select required {...field} id='TypeofApplication' placeholder='Select Option'>
                                                                    <option value='New'>New</option>
                                                                    <option value='Renewal'>Renewal</option>
                                                                    <option value='Conversion of foreign DL'>Conversion of foreign DL</option>
                                                                    <option value='Additional Code or Category'>Additional Code or Category</option>
                                                                    <option value='Change of DL Classification'>Change of DL Classification</option>
                                                                    <option value='Expired DL with valid FDL'>Expired DL with valid FDL</option>
                                                                    <option value='Duplicate'>Duplicate</option>
                                                                    <option value='Dropping/Adding Category'>Dropping/Adding Category</option>
                                                                    <option value='Revision of Records - Change Address'>Revision of Records - Change Address</option>
                                                                    <option value='Revision of Records - Change Civil Status'>Revision of Records - Change Civil Status</option>
                                                                    <option value='Revision of Records - Change Name'>Revision of Records - Change Name</option>
                                                                    <option value='Revision of Records - Change Birthdate'>Revision of Records - Change Birthdate</option>
                                                                    <option value='Revision of Records - Others'>Revision of Records - Others</option>
                                                                    <option value='Enchancement of DL'>Enchancement of DL</option>
                                                                    <option value='Change of Clutch Type'>Change of Clutch Type</option>                                          </Select>
                                                                <FormErrorMessage>{form.errors.TypeofApplication}</FormErrorMessage>
                                                            </FormControl>
                                                        )}
                                                    </Field>
                                                </Grid>





                                                <Heading>Driver License Vehicle Category</Heading>

                                                <Field name='Existing' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.Existing && form.touched.Existing}>
                                                            <FormLabel htmlFor='Existing'>Existing/Applied For</FormLabel>
                                                            <Input required {...field} id='Existing' placeholder='Existing' />
                                                            <FormErrorMessage>{form.errors.Existing}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>

                                                <Field name='VehicleCategory' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.VehicleCategory && form.touched.VehicleCategory}>
                                                            <FormLabel htmlFor='VehicleCategory'>Vehicle Category</FormLabel>
                                                            <Input required {...field} id='VehicleCategory' placeholder='VehicleCategory' />
                                                            <FormErrorMessage>{form.errors.VehicleCategory}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>

                                                <Field name='TypeOfPro' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.TypeOfPro && form.touched.TypeOfPro}>
                                                            <FormLabel htmlFor='TypeOfPro'>Type of License Application</FormLabel>
                                                            <Input required {...field} id='TypeOfPro' placeholder='TypeOfPro' />
                                                            <FormErrorMessage>{form.errors.TypeOfPro}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>
                                                <Field name='ClutchType' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.ClutchType && form.touched.ClutchType}>
                                                            <FormLabel htmlFor='ClutchType'>Clutch Type</FormLabel>
                                                            <Input required {...field} id='ClutchType' placeholder='ClutchType' />
                                                            <FormErrorMessage>{form.errors.ClutchType}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>


                                                <Field name='Conditions' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.Conditions && form.touched.Conditions}>
                                                            <FormLabel htmlFor='Conditions'>Conditions</FormLabel>
                                                            <Input required {...field} id='Conditions' placeholder='Conditions' />
                                                            <FormErrorMessage>{form.errors.Conditions}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>
                                                <Field name='PersonnelEval' >
                                                    {({ field, form }) => (
                                                        <FormControl isInvalid={form.errors.PersonnelEval && form.touched.PersonnelEval}>
                                                            <FormLabel htmlFor='PersonnelEval'>PersonnelEval</FormLabel>
                                                            <Input required {...field} id='PersonnelEval' placeholder='PersonnelEval' />
                                                            <FormErrorMessage>{form.errors.PersonnelEval}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>



                                                <Button
                                                    mt={4}
                                                    colorScheme='teal'
                                                    isLoading={props.isSubmitting}
                                                    type='submit'
                                                >
                                                    Submit
                                                </Button>

                                            </Form>
                                        )}
                                    </Formik>
                                </Stack>

                            </Box>

                        </SimpleGrid>

                    </ModalBody>
                    <Center py={12}>

                    </Center>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}