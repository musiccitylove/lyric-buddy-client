import React from 'react';

class SongView extends React.Component {
  state = {  }
  
  render() { 
    const songs = this.props.song;
    const songid = this.props.songid;
    console.log(songid)
    if(songs.length === 0){
      return (
        <div>
          loading
        </div>
      )
    }
    console.log(songs[0]);
    return ( 
      <div className='Songview'> 
            <button
          className='mobile_back'
          type='button'
          onClick={this.handleClickDelete}
        >Back</button> 
      <h2 className='Song__title'>
        Full Song View
          {this.props.song[songid].title}<br></br> 
           {this.props.song[songid].key}   
      </h2>
      <p>{this.props.song[songid].content} </p>
      <button
          className='song__delete'
          type='button'
          onClick={this.handleClickDelete}
        >Delete</button>

      </div>
     );
  }
}
 
export default SongView;