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
        <div>
          <MessageList />
          <MessageForm />
        </div>
        <ChatList />
      </Container>
    </Fragment>
  )
)


export default Main

// --------------------------

const Container = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media only screen and (min-width: 35em)': {
    gridTemplateColumns: '3fr 1fr',
  },
})
