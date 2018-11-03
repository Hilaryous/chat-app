import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import Nav from '../Nav'
import AppContext from '../../context'

describe('Nav', () => {
  it('shows the correct snapshot tree for the Nav component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>

        <AppContext.Provider>
          <Nav />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
