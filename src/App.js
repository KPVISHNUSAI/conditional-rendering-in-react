import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //     return <button>Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state
    let authButton

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {/* {isLoggedIn ? <button>Logout</button> : null} */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
