import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

describe('app component', () => {
  const wrapper = setup()

  it('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'app-component')
    expect(appComponent).toHaveLength(1)
  })

  it('renders increment button', () => {
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button).toHaveLength(1)
  })

  it('renders counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay).toHaveLength(1)
  })

  it('counter start at 0', () => {
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
  })

  it('clicking button increment counter', () => {})
})
