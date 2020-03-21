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
        <h1 className='landingHeader'>Welcome to Lyric-Buddy</h1>
      </header>
      <section className="description">
        <p>
          Lyric Buddy is designed to help you take down your song ideas fast so you don't miss a beat.
          Log in and start writing your next masterpiece. 
          You can create a new song in any key you'd like, and you can also filter your songs by key so you can easily access them in a writing session.
          More features to come soon!
        </p>
        <p>
          While everyone is in quarantine I've formatted this app to be an open song database for the public and deleting songs has been disabled.
          If you're a lyricist feel free to add a song, and if you're a songwriter feel free to grab some lyrics and put some music to it.
          Post your ideas online with the tag #CoWrite19 so we can all have a listen and escape the bordum.
          You can log in with the user name: corona and the password: password
          Have fun and start creating!

        
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