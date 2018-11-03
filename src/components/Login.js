// @flow
import React from 'react'
import styled from 'react-emotion'
import LoginForm from './LoginForm'

const Login = () => (
  <Layout>
    <Text>
      chatterbox
    </Text>
    <LoginForm />
  </Layout>
)

export default Login

//------------------------------

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})

const Text = styled('div')({
  fontSize: '24px',
})
