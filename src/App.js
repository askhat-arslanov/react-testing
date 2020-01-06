import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <div data-test="app-component">
        <div data-test="counter-display">{this.state.counter}</div>
        <button data-test="increment-button"></button>
      </div>
    )
  }
}

export default App
