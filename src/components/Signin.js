import React from 'react';
import TokenService from './../services/token-service'
import AuthApiService from './../services/auth-api-service'


class Signin extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error: null})
    const { user_name, password } = ev.target
    

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })

    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }

  render() {
    const { error } = this.state
    return (
      <div>
        <h1 className='signinHeader'>Sign in and join the party!</h1>
      <form
        className='SigninForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='SigninForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='SigninForm__user_name?'>
            </input>
        </div>
        <div className='password'>
          <label htmlFor='SigninForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='SigninForm__password?'>
          </input>
        </div>
        <button 
        className='signin_button'
        type='submit'>
          Signin
        </button>
      </form>
      </div>
    )
  }
}
 
export default Signin;
