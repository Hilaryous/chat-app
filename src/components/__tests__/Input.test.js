import React from 'react'
import renderer from 'react-test-renderer'
import Input from '../Input'

describe('Input', () => {
  it('shows the correct snapshot tree for the Input component', () => {
    const tree = renderer.create(
      <Input
        type="text"
        placeholder="Message"
        value="hi"
        onChange={() => {}}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
