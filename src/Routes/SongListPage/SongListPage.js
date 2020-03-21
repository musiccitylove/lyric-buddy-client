import React from 'react';
import SongsContext from '../../context/SongsContext';
import Listitem from '../../components/Listitem';
import './SongListPage.css'
import Header from '../../components/Header'

class SongListPage extends React.Component {
  state = { 
    filterkey: 'Chromatic'
   }

   filterByKey = (songkey) => {
    this.setState({
      filterkey: songkey
    })
    };
 
  static contextType = SongsContext;
  render() { 

    const songs = this.context.songs;
    const filteredSongs = this.state.filterkey === 'Chromatic' ?
      songs :
      songs.filter(song => song.songkey === this.state.filterkey )
    const songsJSX = filteredSongs.map(song => {
      return <Listitem
        key={song.id}
        id={song.id}
        title={song.title}
        songkey={song.songkey}
        content={song.content}
      />
  })

    return ( 
      <div className= 'FullView'>
        <Header 
        onChange={this.filterByKey}
        />
      <div className='songs-body'>
      <section className='song_list_grid'>
        <ul className='song_list'>
          {songsJSX}
          
        </ul>
      </section>
      </div>
      </div>
     );
  }
}
 
export default SongListPage;
