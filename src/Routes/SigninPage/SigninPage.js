import React, { Component } from 'react';
import  Signin from '../../components/Signin';
import './SigninPage.css'


export default class SigninPage extends Component {
  state = { 
    location: {},
    history: {
      push: () => {},
    },
   }

   handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
   }

  render() {
    return (
      <div className="landingForms">
        <Signin onLoginSuccess={this.handleLoginSuccess}/>
        {/* <Signup /> */}
      </div> 
    )
  }
}