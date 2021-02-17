import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      fullname:'',
      username:'',
      email:'',
      password:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  changeFullName(event){
    this.setState({
      fullname:event.target.value
    })
  }
  changeUserName(event){
    this.setState({
      username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:3001/app/signup', registered)
        .then(response => console.log(response.data))
  
     
      this.setState({
        fullname: '',
        username: '',
        email: '',
        password: ''
      })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='form-div'>
            <form onSubmit={this.onSubmit}>
              <input type = 'text' placeholder='Full Name' onChange={this.changeFullName} value={this.state.fullname} className='form-control form-group' />
              <input type = 'text' placeholder='user Name' onChange={this.changeUserName} value={this.state.username} className='form-control form-group' />
              <input type = 'text' placeholder='E-mail' onChange={this.changeEmail} value={this.state.email} className='form-control form-group' />
              <input type = 'text' placeholder='Password' onChange={this.changePassword} value={this.state.password} className='form-control form-group' />
              <input type='submit' className='btn btn-danger btn-block' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
