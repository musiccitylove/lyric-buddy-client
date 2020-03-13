import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Landing from './Routes/LandingPage/LandingPage'
import SongListPage from './Routes/SongListPage/SongListPage'
import config from './config';
import ErrorBoundary from './ErrorBoundary';
import SongsContext from './context/SongsContext';
import CreateASong from './Routes/CreateASong/CreateASong'

class App extends Component {
    state = {
      songs: []
    
  };

  componentDidMount() {
        fetch(`${config.API_ENDPOINT}/songs`)      
        .then((songsRes) => {
            if (!songsRes.ok) {
                throw new Error('Songs fetching failed');
            }
            return songsRes.json();
        })
        .then((songs) => {
            this.setState({songs});
        })
        .catch(error => {
            console.error({error});
        });
  }


  render() {
    const { songs } = this.state;
    const value = {
      songs,
    }

    return(
      <SongsContext.Provider value={value}>
        <ErrorBoundary>
          
          <Route exact path="/" component={Landing} />
          <Route path="/songs/:songid" component={SongListPage} />
          <Route path="/create" component={CreateASong} />
        </ErrorBoundary>  
      </SongsContext.Provider> 
    )

  }
}

export default App;
