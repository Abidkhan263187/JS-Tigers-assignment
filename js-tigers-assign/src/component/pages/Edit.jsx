import React, { useEffect, useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { editInfo } from '../redux/api';
import { update } from '../redux/action';

export const Edit = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const editData = useSelector((store) => store.editData);
    // Initialize editDataObj with the data from the store
    const [editDataObj, setEditDataObj] = useState({
        vendorName: '',
        bankAccountNo: '',
        bankName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        zipCode: '',
    });

    useEffect(() => {
        // Update editDataObj when editData changes
        setEditDataObj(editData);
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditDataObj({
            ...editDataObj,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editInfo(editDataObj));
        dispatch(update(false))
        onClose();
    };

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Vendor</ModalHeader>
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
                                update
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};
