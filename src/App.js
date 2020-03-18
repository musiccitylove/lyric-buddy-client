import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Landing from './Routes/LandingPage/LandingPage'
import SongListPage from './Routes/SongListPage/SongListPage'
import config from './config';
import ErrorBoundary from './ErrorBoundary';
import SongsContext from './context/SongsContext';
import CreateASong from './Routes/CreateASong/CreateASong';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import NotFoundPage from './Routes/NotFoundPage/NotFoundPage';
import SigninPage from "./Routes/SigninPage/SigninPage";

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

  handleAddSong = song => {
    
    this.setState({
        songs: [...this.state.songs, song] // adds our new note to the end of the notes array
    });
};

handleDeleteSong = songId => {
  this.setState({
      songs: this.state.songs.filter(song => song.id !== songId)
  });
};


  render() {
    const { songs } = this.state;
    const value = {
      songs,
      addSong: this.handleAddSong,
      deleteSong: this.handleDeleteSong


    }

    return(
      <SongsContext.Provider value={value}>
        <ErrorBoundary>
          <Switch>
          
            <Route exact path="/" component={Landing} />
            <PublicOnlyRoute path={'/login'} component={SigninPage} />
            <PrivateRoute exact path="/songs" component={SongListPage} />
            <PrivateRoute path="/songs/:songid" component={SongListPage} />
            <PrivateRoute path="/create" component={CreateASong} />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorBoundary>  
      </SongsContext.Provider> 
    )

  }
}

export default App;
