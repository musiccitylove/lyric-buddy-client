import React from 'react';
import SongsContext from '../../context/SongsContext';
import Listitem from '../../components/Listitem';
import Songview from '../../components/Songview';
import './SongListPage.css'
import Header from '../../components/Header'

class SongListPage extends React.Component {
  state = { 
    
   }
  static contextType = SongsContext;
  render() { 
    // this.context.songs
    console.log(typeof this.props.match.params.songid)
    const song = this.context.songs.find(song => song.id == this.props.match.params.songid );
    console.log(song)
    return ( 
      <div className= 'FullView'>
        <Header />
      <div className='songs-body'>
      <section className='song_list_grid'>
        <ul className='song_list'>
          {this.context.songs.map(song => {
              return <Listitem
                key={song.id}
                id={song.id}
                title={song.title}
                songkey={song.songkey}
                content={song.content}
              />
          })}
        </ul>
      </section>
      {/* <section className='full-song'>
        <Songview 
          song={song}
          
        />
      </section> */}
      </div>
      </div>
     );
  }
}
 
export default SongListPage;
