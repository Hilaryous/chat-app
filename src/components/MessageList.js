// @flow
import React from 'react'
import map from 'ramda/src/map'
import AppContext from '../context'
import Message from './Message'
import type { MessageType } from '../types/Message'

type Props = {
  list: Array<MessageType>
}

const MessageList = ({ list }: Props) => (
  <div>
    { map(item => <Message key={item.content} message={item} />, list)}
  </div>
)

export default () => (
  <AppContext.Consumer>
    {({ messages }) => <MessageList list={messages} />}
  </AppContext.Consumer>
)

// --------------------------
