import axios from 'axios';
import { Box, Button, ButtonGroup, Flex, Grid, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInfo, editInfo, getListData } from '../redux/api';
import { editObjData, update } from '../redux/action';
import { Edit } from './Edit';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [page, setPage] = useState(1);
    const flag = useSelector((store) => store.flag);
    const listArrayData = useSelector((store) => store.listArrayData);

    const [deletePopoverId, setDeletePopoverId] = useState(null); // Store the ID of the card with the open delete popover.

    useEffect(() => {
        // Fetch the list data when the component mounts or when listArrayData changes.
        dispatch(getListData(page));
    }, [page, flag]);

    const handleDelete = (id) => {
        dispatch(deleteInfo(id));
        dispatch(update(false));
        setDeletePopoverId(null); // Close the delete popover for this card.
    };

    const handleEdit = (details) => {
        // Handle edit action and open the modal.
        dispatch(editObjData(details));

        onOpen();
    };

    const toggleDeletePopover = (id) => {
        if (deletePopoverId === id) {
            setDeletePopoverId(null); // Close the delete popover for this card.
        } else {
            setDeletePopoverId(id); // Open the delete popover for this card.
        }
    };

    return (
        <>
            <Grid width="80%" margin="5% auto" gridTemplateColumns="repeat(3,1fr)">
                {listArrayData.length > 0 && listArrayData.map((elem, ind) => (
                    <Box
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
                        <Flex mt="20px" justifyContent="space-around">
                            <Button colorScheme="blue" onClick={() => handleEdit(elem)}>Edit</Button>
                            <Popover
                                isOpen={deletePopoverId === elem._id}
                                onOpen={() => toggleDeletePopover(elem._id)}
                                onClose={() => toggleDeletePopover(elem._id)}
                                placement='right'
                                closeOnBlur={false}
                            >
                                <PopoverTrigger>
                                    <Button colorScheme='red'>Delete</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        Are you sure you want to continue with your action?
                                    </PopoverBody>
                                    <PopoverFooter display='flex' justifyContent='flex-end'>
                                        <ButtonGroup size='sm'>
                                            <Button variant='outline' onClick={() => toggleDeletePopover(elem._id)}>Cancel</Button>
                                            <Button colorScheme='red' onClick={() => handleDelete(elem._id)}>Delete</Button>
                                        </ButtonGroup>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                    </Box>
                ))}
            </Grid>
            <Flex w={'15%'} justifyContent={'space-between'} m={'auto'} >
                <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>prev</Button>
                <Button>{page}</Button>
                <Button isDisabled={listArrayData.length === 1} onClick={() => setPage(page + 1)}>next</Button>
            </Flex>
            {/* Render the Edit component in a modal when isOpen is true */}
            {isOpen && <Edit isOpen={isOpen} onClose={onClose} />}
        </>
    );
};
