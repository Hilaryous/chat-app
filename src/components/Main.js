// @flow
import React, { Fragment } from 'react'
import styled from 'react-emotion'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import ChatList from './ChatList'
import Nav from './Nav'

const Main = () => (
  (
    <Fragment>
      <Nav />
      <Container>
        <ChatList />
        <div>
          <MessageList />
          <MessageForm />
        </div>
      </Container>
    </Fragment>
  )
)


export default Main

// --------------------------

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
})
