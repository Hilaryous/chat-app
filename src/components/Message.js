// @flow
import React from 'react'
import styled from 'react-emotion'
import type MessageType from '../types/Message'

type Props = {
  message: MessageType,
}

const Message = ({ message }: Props) => (
  <Container>
    <Author>
      {message.userEmail}
    </Author>
    {message.content}
  </Container>
)

export default Message

// --------------------------

const Container = styled('div')({
  fontFamily: 'sans-serif',
  padding: '16px',
})

const Author = styled('div')({
  fontWeight: 'bold',
})
