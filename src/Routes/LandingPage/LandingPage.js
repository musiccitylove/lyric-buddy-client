import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'


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
    console.log(this.props)
  }

  render() { 
    return ( 
    <div className='body'>
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
      <Link 
      className='button'
      to='/songs'
      >Let's get started!</Link>
    </div>


    );
  }
}
 
export default Landing;