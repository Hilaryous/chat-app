import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import Main from '../Main'
import AppContext from '../../context'

describe('Main', () => {
  it('shows the correct snapshot tree for the Main component', () => {
    const tree = renderer.create(
      <StaticRouter location="someLocation" context={{}}>

        <AppContext.Provider>
          <Main />
        </AppContext.Provider>
      </StaticRouter>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
