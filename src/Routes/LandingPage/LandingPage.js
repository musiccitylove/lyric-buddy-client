import React from 'react';
import  Signup from '../../components/Signup';
import  Signin from '../../components/Signin';

class Landing extends React.Component {
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
    <div>
      <header>
        <h1>Welcome to Lyric-Buddy</h1>
      </header>
      <section className="description">
        <p>
          Lyric Buddy is designed to help you take down your song ideas fast so you don't miss a beat.
          Log in and start writing your next master piece. 
          You can create a new song in any key you'd like, and you can also filter your songs by key so you can easily access them in a writing session.
          More features to come soon!
        </p>
      </section>
      <div className="landingForms">
        <Signin />
        {/* <Signup /> */}
      </div> 
    </div>


    );
  }
}
 
export default Landing;