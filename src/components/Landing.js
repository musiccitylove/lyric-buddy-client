import React from 'react';

class Landing extends React.Component {
  state = {  }
  render() { 
    return ( 
    <div className="box">
    <label for="uname">Username</label>
    <input type="text" placeholder="Enter Username" name="uname" required />
    
    <label for="email">Email</label>
    <input type="text" placeholder="Enter Email Address" name="email" required />

    <label for="psw">Password</label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label for="confirm">Confirm Password</label>
    <input type="password" placeholder="Enter Same Password" name="confirm" required />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
   </div> 


    );
  }
}
 
export default Landing;