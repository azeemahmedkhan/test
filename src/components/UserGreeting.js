import React, {Component} from 'react'

class UserGreeting extends Component{

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    let message
    if (this.state.isLoggedIn) {
      message = <h1>Welcome Azeem</h1>
    }
    else {
      message = <h1>Welcome Guest</h1>
    }
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default UserGreeting
