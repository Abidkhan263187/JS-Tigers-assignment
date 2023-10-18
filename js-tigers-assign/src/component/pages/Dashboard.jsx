import axios from 'axios'
import { Box, Button, Flex, Grid, Text, VStack, useDisclosure } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInfo, editInfo, getListData } from '../redux/api';
import { editObjData } from '../redux/action';

export const Dashboard = () => {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const listArrayData = useSelector((store) => store.listArrayData)
    const editData = useSelector((store) => store.editData)
    const [editDataObj, seteditData] = useState({
        vendorName: '',
        bankAccountNo: '',
        bankName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        zipCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        seteditData({
            ...editDataObj,
            [name]: value,
        });
    };
    useEffect(() => {
        dispatch(getListData())
    }, [listArrayData])

    const handleDelete = (id) => {
        dispatch(deleteInfo(id))
        // console.log(id)
    }
    const handleEdit = (details) => {
        seteditData(details)
       
       onOpen()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editInfo(editDataObj))
        console.log(editDataObj)
        onClose()
    }


    return (
        <><Grid width={'80%'} margin={'5%  auto'} border={'1px solid'} gridTemplateColumns={'repeat(3,1fr)'}>

            {listArrayData.length > 0 && listArrayData && listArrayData.map((elem, ind) => {
                return (<Box
                    borderWidth="1px"
                    borderRadius="lg"
                    p="4"
                    boxShadow="md"
                    maxW="md"
                    m="2"
                    key={ind}
                >
                    <VStack spacing="4">
                        <Text fontWeight="bold">{elem.vendorName}</Text>
                        <Text>Bank Account No: {elem.bankAccountNo}</Text>
                        <Text>Bank Name: {elem.bankName}</Text>
                        <Text>Address: {elem.addressLine1}, {elem.addressLine2}</Text>
                        <Text>City: {elem.city}</Text>
                        <Text>Country: {elem.country}</Text>
                        <Text>Zip Code: {elem.zipCode}</Text>
                    </VStack>
                    <Flex mt={'20px'} justifyContent={'space-around'}>
                        <Button colorScheme="blue" onClick={() => handleEdit(elem)}>Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button colorScheme="red" onClick={() => handleDelete(elem._id)}>Delete</Button>
                    </Flex>

                </Box>);
            })}
        </Grid>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Vendor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit} id="form">
                            <FormControl isRequired>
                                <FormLabel>Vendor Name</FormLabel>
                                <Input
                                    type="text"
                                    name="vendorName"
                                    value={editDataObj.vendorName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Bank Account No</FormLabel>
                                <Input
                                    type="text"
                                    name="bankAccountNo"
                                    value={editDataObj.bankAccountNo}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Bank Name</FormLabel>
                                <Input
                                    type="text"
                                    name="bankName"
                                    value={editDataObj.bankName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Address Line 1</FormLabel>
                                <Input
                                    type="text"
                                    name="addressLine1"
                                    value={editDataObj.addressLine1}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Address Line 2</FormLabel>
                                <Input
                                    type="text"
                                    name="addressLine2"
                                    value={editDataObj.addressLine2}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>City</FormLabel>
                                <Input
                                    type="text"
                                    name="city"
                                    value={editDataObj.city}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input
                                    type="text"
                                    name="country"
                                    value={editDataObj.country}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Zip Code</FormLabel>
                                <Input
                                    type="text"
                                    name="zipCode"
                                    value={editDataObj.zipCode}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Button mt={4} colorScheme="teal" type="submit">
                                Create Vendor
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

