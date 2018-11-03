// @flow
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import AppContext from '../context'
import Button from './Button'
import Input from './Input'

type State = {
  email: string,
  password: string,
}

type Props = {
  signInUser: () => void,
}

class LoginForm extends PureComponent<Props, State> {
  initialState = {
    email: '',
    password: '',
  }

  state = this.initialState

  handleClearForm = () => {
    this.setState(() => this.initialState)
  };

  handleUpdateEmail= (e) => {
    this.setState({ email: e.target.value })
  }

  handleUpdatePassword= (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const { signInUser } = this.props
    signInUser(email, password)
  }

  render() {
    const { email, password } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={this.handleUpdateEmail}
          value={email}
        />
        <Input
          autoComplete="current-password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={this.handleUpdatePassword}
          value={password}
        />
        <Button type="submit">
            Login
        </Button>
      </Form>
    )
  }
}

export default () => (
  <AppContext.Consumer>
    {({ actions: { signInUser } }) => <LoginForm signInUser={signInUser} />}
  </AppContext.Consumer>
)

//------------------------------

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '350px',
})
