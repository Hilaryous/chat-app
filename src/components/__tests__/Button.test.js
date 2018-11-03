import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button'

describe('Button', () => {
  it('shows the correct snapshot tree for the Button component', () => {
    const tree = renderer.create(
      <Button>
          send
      </Button>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
