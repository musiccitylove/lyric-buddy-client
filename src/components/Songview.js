import React from 'react';

class SongView extends React.Component {
  state = {  }
  
  render() { 
    if(!this.props.song){
      return (
        <div>
          ...
        </div>
      )
    }
    return ( 
      <div className='Songview'> 
      <h4 className='Song__title'>
          {this.props.song.title} lyrics<br></br> 
           {this.props.song.songkey}   
      </h4>
      <p>{this.props.song.content} </p>
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