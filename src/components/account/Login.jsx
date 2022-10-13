import styled from '@emotion/styled';
import { Box, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const Component = styled(Box)`
width: 400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/ 0.6);
`
const Image = styled('img')({
  width: 100,
  display: 'flex',
  margin: 'auto',
  padding: '50px 0 0'
})

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction:column;
& >div, & > button  {
  margin-top:20px;
}
`;
const LoginButton = styled(Button)`
text-transform: none;
background:#FB641B;
color:#fff;
height:48px;
border-radius: 2px;
`

const SignUpButton = styled(Button)`
text-transform: none;
background:#fff;
color: #2874f0;
height:48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const OR = styled(Typography)`
  color:#878787;
`

const signUpInitialValue = {
  name: '',
  userName: '',
  password: '',

}

const Login = () => {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  const [account, toggleAccount] = useState('login')
  const [singUp, setSingUp] = useState(signUpInitialValue);
  const toggleSignUp = () => {
    account === 'login' ? toggleAccount('singUp') : toggleAccount('login')
  }

  const onInputChange = (e) => {
    setSingUp({...singUp, [e.target.name]: e.target.value})
  }

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="" />
        {
          account === 'login'
            ?
            <Wrapper>
              <TextField variant='standard' label='Enter your name' />
              <TextField variant='standard' label='Enter your password' />
              <LoginButton variant='contained'>Login</LoginButton>
              <OR style={{ textAlign: 'center', marginTop: '10px' }}>OR</OR>
              <SignUpButton variant='outlined' onClick={() => toggleSignUp()}>Create an Account</SignUpButton>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant='standard' name='name' onChange={(e) => onInputChange(e)} label='Enter Name' />
              <TextField variant='standard' name='userName' onChange={(e) => onInputChange(e)} label='Enter User name' />
              <TextField variant='standard' name='password' onChange={(e) => onInputChange(e)} label='Enter Password' />
              <SignUpButton >SignUp</SignUpButton>
              <OR style={{ textAlign: 'center', marginTop: '10px' }}>OR</OR>
              <LoginButton variant='contained' onClick={() => toggleSignUp()}>Already have an Account</LoginButton>
            </Wrapper>
        }
      </Box>
    </Component>
  )
}

export default Login