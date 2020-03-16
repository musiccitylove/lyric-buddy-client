import React from 'react';
import { Link } from 'react-router-dom';

class CreateButton extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Link 
      className='create_button'
      to='/create' 
      type='button'
      >Create A Song </Link >
     );
  }
}
 
export default CreateButton;