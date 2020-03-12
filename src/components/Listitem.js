import React from 'react';
import { Link } from 'react-router-dom'

class Listitem extends React.Component {
  state = {  }
  
  render() { 
    return ( 
      <div className='Song'>
      <h2 className='Song__title'>
        <Link to={`/songs/${this.props.id}`}>
          {this.props.title}<br></br>
          {this.props.songkey}
        </Link>
      </h2>
      </div>


    );
  }
}
 
export default Listitem;