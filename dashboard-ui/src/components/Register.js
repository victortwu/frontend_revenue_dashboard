import React, { Component } from 'react'


class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }


handleUsernameChange =(e)=> {
  console.log(e.target.value)
  this.setState({
    username: e.target.value
  })
}

handleEmailChange =(e)=> {
  console.log(e.target.value)
  this.setState({
    email: e.target.value
  })
}

handlePasswordChange =(e)=> {
  console.log(e.target.value)
  this.setState({
    password: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  fetch(this.props.baseURL + 'api/v1/users/register', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response=> {
    console.log('Response from register route: ', response)
    return response.json()
  }).then(data=> {
    console.log('Data from register route: ', data)
    if (data.status === 401) {
      this.props.closeRegisterForm()
      alert(`${data.message}`)
    }

    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }).catch(err=> {console.error('Error: ', err)})
  this.clearForm()
  this.props.closeRegisterForm()
}


render(){
const toggleClass = this.props.showRegisterForm ? 'displayShow' : 'displayNone'

    return(
      <div className={toggleClass}>
          <div className='modalBackground'>
              <div className='modalContainer'>
                  <div className='formDiv'>
                    <form onSubmit={(e)=> this.handleSubmit(e)}>
                        <label htmlFor='username'>USERNAME:</label>
                        <input type='text' id='username' name='username' placeholder='Choose a user name.' onChange={(e)=> this.handleUsernameChange(e)} />

                        <label htmlFor='email'>EMAIL:</label>
                        <input type='text' id='email' name='email' placeholder='youremail@email.com' onChange={(e)=> this.handleEmailChange(e)} />

                        <label htmlFor='password'>PASSWORD:</label>
                        <input type='password' id='password' name='password' onChange={(e)=> this.handlePasswordChange(e)} />

                        <button id='submitBtn' type='submit'>REGISTER</button>
                    </form>
                    <button id='xCloseBtn' onClick={()=> this.props.closeRegisterForm()}>X</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Register
