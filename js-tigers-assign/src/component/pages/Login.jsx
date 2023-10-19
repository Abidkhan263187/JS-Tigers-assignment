
import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';



 const GoogleLoginButton = () => {
    const dispatch=useDispatch();
 const client_id=process.env.REACT_APP_GOOGLE_ID
    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    const decodeName=decoded.given_name
                    if(decodeName){
                        sessionStorage.setItem('userName',JSON.stringify(decodeName));
                        // console.log(decodeName)
                        window.location.href='/'
                    }
                  
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export const Login = () => {
    return (
      <Box w={'25%'} m={' 10% auto'} borderRadius={"10px"}   boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" p={'50px'} >
       <Heading size={'md'} m={'20px 0px'}> Login Page</Heading>
        <GoogleLoginButton/>
        
         
      </Box>
    )
  }
  
