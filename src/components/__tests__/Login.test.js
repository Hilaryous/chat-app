import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import Login from '../Login'
import AppContext from '../../context'

describe('Login', () => {
  it('shows the correct snapshot tree for the Login component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>

        <AppContext.Provider>
          <Login />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
