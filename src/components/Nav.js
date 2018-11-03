// @flow
import React from 'react'
import styled from 'react-emotion'
import AppContext from '../context'
import Button from './Button'

type Props = {
  email: string,
  logoutUser: () => void,
}

const Nav = ({ email, logoutUser }: Props) => (
  <Relative>
    <Flex
      alignItems="center"
      height="100%"
      justifyContent="space-between"
      px={3}
    >
      <p>
        {`Hi! ${email}`}
      </p>
      <Button
        onClick={logoutUser}
      >
        Logout
      </Button>
    </Flex>
  </Relative>
)

export default () => (
  <AppContext.Consumer>
    {({ currentUser, actions: { logoutUser } }) => (
      <Nav
        logoutUser={logoutUser}
        email={currentUser.email}
      />
    )}
  </AppContext.Consumer>
)

//------------------------------

const Relative = styled('div')({
  width: '100%',
  height: 80,
  borderBottom: '2px black solid',
})

const Flex = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  maxWidth: '1440',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'space-between',
  px: '16px',
})
