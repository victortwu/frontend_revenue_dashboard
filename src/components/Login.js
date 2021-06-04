import React, { Component } from 'react'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }

clearForm = () => {
  let username = document.getElementById('username')
  let password = document.getElementById('password')
  username.value = ''
  password.value = ''
}

handleUsernameChange =(e)=> {
  this.setState({
    username: e.target.value
  })
}

handlePasswordChange =(e)=> {
  this.setState({
    password: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()

  fetch(this.props.baseURL + 'api/v1/users/login', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
    }),
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if(data.status === 401){
      alert(`${data.message}`)
      this.props.logOut()
    } else {
      this.props.setUserId(data)
      this.setState({
        username: '',
        password: ''
      })
    }
  }).catch(err=> {console.error('Error: ', err)})
  this.clearForm()
  this.props.closeLoginForm()

}

render(){


const toggleClass = this.props.showLogInForm ? 'displayShow' : 'displayNone'

    return(
      <div className={toggleClass}>
          <div className='modalBackground'>
              <div className='modalContainer'>
                  <div className='formDiv'>
                    <form onSubmit={(e)=> this.handleSubmit(e)}>
                        <label htmlFor='username'>USERNAME:</label>
                        <input type='text' id='username' name='username' onChange={(e)=> this.handleUsernameChange(e)} />

                        <label htmlFor='password'>PASSWORD:</label>
                        <input type='password' id='password' name='password' onChange={(e)=> this.handlePasswordChange(e)} />

                        <button id='submitBtn' type='submit'>LOG IN</button>
                    </form>
                    <button id='xCloseBtn' onClick={()=> {
                      this.clearForm()
                      this.props.closeLoginForm()
                    }}>X</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Login
