import React from 'react';
import SongsContext from '../../context/SongsContext';
import Listitem from '../../components/Listitem';
import Songview from '../../components/Songview';
import './SongListPage.css'

class SongListPage extends React.Component {
  state = {  }
  static contextType = SongsContext;
  render() { 
    // this.context.songs
    console.log(this.props.match.params.songid)
    const song = this.context.songs;
    const songid = this.props.match.params.songid-1;
    console.log(song)
    return ( 
      <div className= 'FullView'>
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
          songid={songid}
        />
      </section>
      </div>
     );
  }
}
 
export default SongListPage;
