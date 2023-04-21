// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onClickMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="container">
        <div className="fruitsCard">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruitsContainer">
            <div className="fruitsImages">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruitsImages">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="buttonContainer">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
