import React, {Component} from 'react'
import axios from 'axios'
import PasswordMask from 'react-password-mask'

class Register extends Component{

  constructor(props){
    super(props)
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://immense-fjord-54349.herokuapp.com/api/account/users/', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const {username, first_name, last_name, email, password} = this.state
    return (
      <div className="container p-3">
        <h1 className="display-4 text-left">Sign Up</h1>
        <form onSubmit={this.submitHandler} className="border border-dark p-3">
          <div className="form-group">
            <input className="form-control" type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Enter Username"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="first_name" value={first_name} onChange={this.changeHandler} placeholder="Enter first name"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="last_name" value={last_name} onChange={this.changeHandler} placeholder="Enter last name"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="email" value={email} onChange={this.changeHandler} placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Enter Passoword"/>
          </div>
          <button className="btn btn-success" type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register
