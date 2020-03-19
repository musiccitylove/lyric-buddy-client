import React from 'react';
import Keymenu from './Keymenu'
import CreateButton from './CreateButton'
import { Link } from 'react-router-dom';
import TokenService from './../services/token-service'


class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }
  render() { 
    return ( 
      <header className='header'>
        <Link 
        className='logout_button'
        onClick={this.handleLogoutClick}
          to='/'>
          Logout</Link>
      <CreateButton />
      <h1>My Songs</h1>
      
      <Keymenu label={'Sort By Key'}/>        
    </header>
     );
  }
}
 
export default Header;