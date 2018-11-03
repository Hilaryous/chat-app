import React from 'react'
import renderer from 'react-test-renderer'
import Message from '../Message'

describe('Message', () => {
  it('shows the correct snapshot tree for the Message component', () => {
    const tree = renderer.create(
      <Message
        message={{ userEmail: 'foo@test.com', content: 'test' }}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
