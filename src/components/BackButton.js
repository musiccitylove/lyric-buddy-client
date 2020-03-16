import React from 'react';
import { Link } from 'react-router-dom';

class BackButton extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Link 
      className='back_button'
      to='/songs' 
      type='button'
      >{this.props.lable} </Link >
     );
  }
}
 
export default BackButton;