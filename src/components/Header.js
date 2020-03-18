import React from 'react';
import Keymenu from './Keymenu'
import CreateButton from './CreateButton'
import { Link } from 'react-router-dom';


class Header extends React.Component {
  state = {  }
  render() { 
    return ( 
      <header className='header'>
        <Link className='logout_button'>Logout</Link>
      <CreateButton />
      <h1>My Songs</h1>
      
      <Keymenu label={'Sort By Key'}/>        
    </header>
     );
  }
}
 
export default Header;