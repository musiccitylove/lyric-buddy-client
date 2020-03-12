import React from 'react';
import  Signup from '../../components/Signup';
import  Signin from '../../components/Signin';

class Landing extends React.Component {
  state = {  }
  render() { 
    return ( 
    <div>
      <header>
        <h1>Welcome to Lyric-Buddy</h1>
      </header>
      <section className="description">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E
        xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <div className="landingForms">
        <Signin />
        <Signup />
      </div> 
    </div>


    );
  }
}
 
export default Landing;