import React from 'react';
import SongsContext from '../../context/SongsContext';
import Listitem from '../../components/Listitem';
import Songview from '../../components/Songview';
import './SongListPage.css'
import Keymenu from '../../components/Keymenu'

class SongListPage extends React.Component {
  state = {  }
  static contextType = SongsContext;
  render() { 
    // this.context.songs
    console.log(typeof this.props.match.params.songid)
    const song = this.context.songs.find(song => song.id == this.props.match.params.songid );
    console.log(song)
    return ( 
      <div className= 'FullView'>
      <header>
        <h1>My Songs</h1>
        <button>Create A Song</button>
        <Keymenu label={'Sort By Key'}/>        
      </header>
      <section className='SongList'>
        <ul>
          {this.context.songs.map(song =>
            <li key={song.id}>
              <Listitem
                id={song.id}
                title={song.title}
                songkey={song.key}
                content={song.content}
              />
            </li>
          )}
        </ul>
      </section>
      <section className='FullSong'>
        <Songview 
          song={song}
          
        />
      </section>
      </div>
     );
  }
}
 
export default SongListPage;
