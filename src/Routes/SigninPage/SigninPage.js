import React, { Component } from 'react';
import  Signup from '../../components/Signup';
import  Signin from '../../components/Signin';


export default class SigninPage extends Component {
  render() {
    // handleLoginSuccess = () => { const { location, history } = this.props const destination = (location.state || {}).from || '/' history.push(destination) }
    return (
      <div className="landingForms">
        <Signin onLoginSuccess={this.handleLoginSuccess}/>
        {/* <Signup /> */}
      </div> 
    )
  }
}