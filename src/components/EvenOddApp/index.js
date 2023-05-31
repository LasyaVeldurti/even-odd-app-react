// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state

    let type
    if (count % 2 === 0) {
      type = 'even'
    } else {
      type = 'odd'
    }

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {type}</p>
          <button onClick={this.onIncrement} className="button" type="button">
            Increment
          </button>
          <p className="caption">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
