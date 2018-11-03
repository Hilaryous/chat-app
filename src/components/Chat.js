// @flow
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import type ChatType from '../types/Chat'
import Button from './Button'

type Props = {
  chat: ChatType,
  selectChat: () => void,
}

class Chat extends PureComponent<Props> {
  handleSelectChat = () => {
    const { selectChat, chat: { id } } = this.props
    selectChat(id)
  }

  render() {
    const { chat } = this.props
    return (
      <Container id="chat">
        <User>
          {chat.userEmail}
        </User>
        <Button type="button" onClick={this.handleSelectChat}>
        Go to Chat
        </Button>
      </Container>
    )
  }
}

export default Chat

// --------------------------

const Container = styled('div')({
  border: '1px solid black',
  fontFamily: 'sans-serif',
  padding: '16px',
})

const User = styled('div')({
  fontWeight: 'bold',
})
