import React from 'react';

class SongView extends React.Component {
  state = {  }
  
  render() { 
    if(!this.props.song){
      return (
        <div>
          loading
        </div>
      )
    }
    return ( 
      <div className='Songview'> 
            <button
          className='mobile_back'
          type='button'
          onClick={this.handleClickDelete}
        >Back</button> 
      <h2 className='Song__title'>
        Full Song View
          {this.props.song.title}<br></br> 
           {this.props.song.key}   
      </h2>
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