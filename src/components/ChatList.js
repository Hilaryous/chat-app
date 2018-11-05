// @flow
import React from 'react'
import map from 'ramda/src/map'
import AppContext from '../context'
import Chat from './Chat'
import type { ChatType } from '../types/Chat'

type Props = {
  list: Array<ChatType>,
  selectChat: () => void,
}

const ChatList = ({ selectChat, list }: Props) => (
  <div>
    { map(item => <Chat key={item.toUser} chat={item} selectChat={selectChat} />, list)}
  </div>
)

export default () => (
  <AppContext.Consumer>
    {({ actions: { selectChat }, chats, currentUser }) => (
      <ChatList
        selectChat={selectChat}
        list={chats}
        currentUser={currentUser}
      />
    )}
  </AppContext.Consumer>
)
