import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import MessageList from '../MessageList'
import AppContext from '../../context'

describe('MessageList', () => {
  it('shows the correct snapshot tree for the MessageList component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>

        <AppContext.Provider>
          <MessageList />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
