import React from 'react';
import SongsContext from '../../context/SongsContext';
import Listitem from '../../components/Listitem';
import Songview from '../../components/Songview';
import './SongListPage.css'
import Header from '../../components/Header'

class SongListPage extends React.Component {
  state = { 
    filterkey: null
   }

   filterByKey = (songkey) => {
    this.setState({
      filterkey: songkey
    })
    };
 
  static contextType = SongsContext;
  render() { 
    console.log(this.state.filterkey)
    // this.context.songs
    // const song = this.context.songs.find(song => song.id == this.props.match.params.songid );
    return ( 
      <div className= 'FullView'>
        <Header 
        onChange={this.filterByKey}
        />
      <div className='songs-body'>
      <section className='song_list_grid'>
        <ul className='song_list'>
          {this.context.songs
          //.filter(song => song.songkey === this.state.filterkey )
          .map(song => {
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
