import React from 'react'
import renderer from 'react-test-renderer'
import Chat from '../Chat'

describe('Chat', () => {
  it('shows the correct snapshot tree for the Chat component', () => {
    const tree = renderer.create(
      <Chat chat={{ userEmai: 'foo@test.com' }} selectChat={() => {}} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
