// @flow
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import AppContext from '../context'
import Input from './Input'
import Button from './Button'

type Props = {
  addMessageToList: ({}) => void,
  currentChatId: string,
  currentUser: {
    id: string,
    email: string,
  },
}

type State = {
  message: string,
}

class MessageForm extends PureComponent<Props, State> {
  initialState = { message: '' }

  state = this.initialState

  handleClearMessage = () => {
    this.setState(() => ({ message: '' }))
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value })
  };

  handleAddMessageToList = (e) => {
    e.preventDefault()
    const { message } = this.state
    const { addMessageToList, currentChatId, currentUser: { id } } = this.props
    const messageObj = {
      chatId: currentChatId,
      userId: id,
      content: message.trim(),
    }
    const cleanedMessage = message.trim()
    if (cleanedMessage.length >= 1) {
      addMessageToList(messageObj)
      this.handleClearMessage()
    }
  }

  render() {
    const { message } = this.state
    const { currentChatId } = this.props
    return (
      currentChatId != null && (
      <Form onSubmit={this.handleAddMessageToList}>
        <Input
          type="text"
          placeholder="Message"
          value={message}
          onChange={this.handleMessageChange}
        />
        <Button type="submit">
          send
        </Button>
      </Form>
      )
    )
  }
}

export default () => (
  <AppContext.Consumer>
    {({ currentChatId, currentUser, actions: { addMessageToList } }) => (
      <MessageForm
        addMessageToList={addMessageToList}
        currentUser={currentUser}
        currentChatId={currentChatId}
      />
    )
        }
  </AppContext.Consumer>
)

// ----------------------------------

const Form = styled('form')({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '3fr 1fr',
  gridGap: '16px',
  alignItems: 'end',
})
