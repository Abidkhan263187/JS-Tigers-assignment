import axios from 'axios';
import { Box, Button, Flex, Grid, Text, VStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInfo, editInfo, getListData } from '../redux/api';
import { editObjData } from '../redux/action';
import { Edit } from './Edit';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
   const [page,setPage]=useState(1)
    const listArrayData = useSelector((store) => store.listArrayData);

    useEffect(() => {
        // Fetch the list data when the component mounts or when listArrayData changes.
        dispatch(getListData(page));
    }, [page]);

    const handleDelete = (id) => {
        // Handle delete action.
        dispatch(deleteInfo(id));
        
    };

    const handleEdit = (details) => {
        // Handle edit action and open the modal.
        dispatch(editObjData(details));
        onOpen();
    };
    

    return (
        <>
            <Grid width="80%" margin="5% auto"  gridTemplateColumns="repeat(3,1fr)">
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
                            <Button colorScheme="blue" onClick={() => handleEdit(elem)}>Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button colorScheme="red" onClick={() => handleDelete(elem._id)}>Delete</Button>
                        </Flex>
                    </Box>
                ))}
            </Grid>
              <Flex w={'15%'} justifyContent={'space-between'} m={'auto'} >
                <Button isDisabled={page ===1} onClick={()=>setPage(page-1)}>prev </Button>
                <Button>{page}</Button>
                <Button isDisabled={listArrayData.length===1} onClick={()=>setPage(page+1)}> next</Button>
              </Flex>
            {/* Render the Edit component in a modal when isOpen is true */}
            {onOpen && <Edit isOpen={isOpen} onClose={onClose} />}
        </>
    );
};
