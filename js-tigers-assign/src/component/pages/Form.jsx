import React, { useState } from 'react';
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../redux/api';

export const Form = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API request to create a vendor
    dispatch(submitForm(formData))
    setFormData({
      vendorName: '',
      bankAccountNo: '',
      bankName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      zipCode: '',
    })


  };

  return (
    <Container mt={'40px'} maxW="md">
      <Heading size={'lg'}>Form</Heading>
      <Box p={4} boxShadow="md" rounded="md">
        <form onSubmit={handleSubmit} id="form">
          <FormControl isRequired>
            <FormLabel>Vendor Name</FormLabel>
            <Input
              type="text"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Bank Account No</FormLabel>
            <Input
              type="number"
              name="bankAccountNo"
              value={formData.bankAccountNo}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Bank Name</FormLabel>
            <Input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address Line 1</FormLabel>
            <Input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Create Vendor
          </Button>
        </form>
      </Box>
    </Container>
  );
};


