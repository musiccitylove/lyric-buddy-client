import React from 'react';
import { Link } from 'react-router-dom'

class Listitem extends React.Component {
  state = { 
    collapsed: false
   }

   handleClick = () => {
     this.setState({
       collapsed: !this.state.collapsed
     })
     
   }
  
  render() { 
    
    const songInfoClass = this.state.collapsed ? ' song_info_collapsed' : ''; 
    return ( 
      <li className='song_div'>
        <h2 
        className='song_title'
        onClick={this.handleClick}
        >
          
            {this.props.title}<br></br>
            In the key of:{this.props.songkey}
        </h2>
        <div className={`song_info${songInfoClass}`}>
          <h4 className='Song__title'>
              {this.props.title} lyrics<br></br> 
              {/* {this.props.songkey}    */}
          </h4>
          <p className='song_lyrics'>{this.props.content} </p>
          <button
              className='song__delete'
              type='button'
              onClick={this.handleClickDelete}
            >
                Delete
          </button>
        </div>
      </li>


    );
  }
}
 
export default Listitem;