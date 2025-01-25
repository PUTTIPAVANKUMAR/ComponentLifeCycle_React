import {Component} from 'react'
import Clock from './component/clock'

import './App.css'

class App extends Component {
  state = {showClock:false}
  onToggleClock = ()=>{
    // const {showClock} = this.state
    this.setState(prevState=>{
      return{showClock:!prevState.showClock}
    })
  }
  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button type="button" className="toggle-button" onClick={this.onToggleClock}>
          {showClock? "Hide Clock":"Show Clock"}
        </button>
        {showClock? <Clock />:null}
      </div>
    )
  }
}

export default App


