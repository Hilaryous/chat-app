// @flow
import compose from 'ramda/src/compose'
import values from 'ramda/src/values'
import filter from 'ramda/src/filter'
import map from 'ramda/src/map'
import path from 'ramda/src/path'

export const getUserId = (currentUserId, users) => compose(
  path(['0', 'id']),
  filter(item => (item.uid === currentUserId)),
  values,
)(users)

export const getChats = (currentUserId, users, chats) => compose(
  map((item) => {
    let user
    if (item.fromUser === currentUserId) {
      user = users[item.toUser]
    } else {
      user = users[item.fromUser]
    }
    return { ...item, userEmail: user.email }
  }),
  filter(item => (item.toUser === currentUserId || item.fromUser === currentUserId)),
  values,
)(chats)

export const getMessages = (currentChatId, users, messages) => compose(
  map((item) => {
    const user = users[item.userId]
    return { ...item, userEmail: user.email }
  }),
  filter(item => item.chatId === currentChatId),
)(messages)

export default undefined
