import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import ChatList from '../ChatList'
import AppContext from '../../context'

describe('ChatList', () => {
  it('shows the correct snapshot tree for the ChatList component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>
        <AppContext.Provider>
          <ChatList />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
