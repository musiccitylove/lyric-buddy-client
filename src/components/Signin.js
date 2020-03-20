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
    
    console.log('Signin submitted')
    // console.log( user_name.value, password.value )

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
        <h1>Sign in and join the party!</h1>
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

// state = {  }
// render() { 
//   return ( 
//   <div className="box">
//     <label htmlFor="uname"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="uname" required />

//     <label htmlFor="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required />

//     <button type="submit">Login</button>
//     <label>
//       <input type="checkbox" defaultChecked="" name="remember" 
//       onChange= {console.log("Remember who you are")}
//       /> Remember me
//     </label>
//  </div> 


//   );
// }