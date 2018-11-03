import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import MessageForm from '../MessageForm'
import AppContext from '../../context'

describe('MessageForm', () => {
  it('shows the correct snapshot tree for the MessageForm component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>

        <AppContext.Provider>
          <MessageForm />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
