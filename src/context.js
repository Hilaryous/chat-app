// @flow
import React, { type Node, PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from './firebase'
import { getChats, getMessages, getUserId } from './utils'
import ChatType from './types/Chat'
import MessageType from './types/Message'
import UserType from './types/User'

const Context = React.createContext()

type Props = {
  children: Node,
  history: {
    replace: (string) => void,
  },
}

type State = {
  chats: Array<ChatType>,
  currentChatId: string,
  currentUser: UserType,
  messages: Array<MessageType>,
  users: UserType,
}

class AppContextProvider extends PureComponent<Props, State> {
  chatsRef = firebase.database().ref().child('chats');

  messageRef = firebase.database().ref().child('messages');

  usersRef = firebase.database().ref().child('users');

  state = {
    chats: [],
    currentChatId: undefined,
    currentUser: {},
    messages: [],
    users: {},
  };

  componentDidMount() {
    this.listenMessages()
    this.listenUsers()
    this.listenChats()
    this.getAuthedUser()
  }

  getAuthedUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  }

  setUser = (user) => {
    if (user != null) {
      this.setState(() => ({ currentUser: { uid: user.uid, email: user.email } }))
    }
  }

  signInUser = (email, password) => {
    const { history } = this.props
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        this.setUser(user)
        history.replace('/')
      })
      .catch(({ code, message }) => {
        // eslint-disable-next-line
        console.error(code, message)
      })
  }

  selectChat = (chatId) => {
    this.setState(() => ({ currentChatId: chatId }))
  }

  logoutUser = () => {
    const { history } = this.props
    firebase.auth().signOut().then(() => {
      history.replace('/login')
    })
  }

  addUsersToList = (user) => {
    const newRef = this.usersRef.push()
    const newUser = {
      email: user.email,
      uid: user.uid,
      id: newRef.key,
    }
    newRef.set(newUser)
  };

  addMessageToList = (message) => {
    const newRef = this.messageRef.push()
    const newMessage = {
      ...message,
      id: newRef.key,
    }
    newRef.set(newMessage)
  };

  addChatToList = (message) => {
    const newRef = this.chatsRef.push()
    const newMessage = {
      ...message,
      id: newRef.key,
    }
    newRef.set(newMessage)
  };

  listenMessages = () => {
    this.messageRef
      .limitToLast(10)
      .on('value', (message) => {
        const messageVal = message.val()
        if (messageVal) {
          this.setState(() => {
            const messages = Object.values(messageVal)
            return { messages }
          })
        }
      })
  }

  listenChats = () => {
    this.chatsRef
      .limitToLast(10)
      .on('value', (chat) => {
        const chatVal = chat.val()
        if (chatVal) {
          this.setState(({ currentUser, users }) => {
            const currentUserId = getUserId(currentUser.uid, users)
            const chats = getChats(currentUserId, users, chatVal)
            return { currentUser: { ...currentUser, id: currentUserId }, chats }
          })
        }
      })
  }

  listenUsers = () => {
    this.usersRef
      .limitToLast(10)
      .on('value', (user) => {
        const users = user.val()
        if (users) {
          this.setState(() => ({ users }))
        }
      })
  }

  render() {
    const { children } = this.props
    const { currentChatId, users, messages } = this.state
    const chatMessages = getMessages(currentChatId, users, messages)
    return (
      <Context.Provider
        value={{
          ...this.state,
          messages: chatMessages,
          actions: {
            addMessageToList: this.addMessageToList,
            signInUser: this.signInUser,
            logoutUser: this.logoutUser,
            selectChat: this.selectChat,
          },
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default { Provider: withRouter(AppContextProvider), Consumer: Context.Consumer }
