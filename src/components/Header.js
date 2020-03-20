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
        
      <h1 className='main_header'>CoWrite19 
      <span role="img" aria-label="virus">🦠</span>
        </h1>
      
      <Keymenu 
      label={'Sort By Key'}
      onChange={e => this.props.onChange(e.target.value)}
      />   
      <Link 
        className='logout_button'
        onClick={this.handleLogoutClick}
          to='/'>
          Logout</Link>
      <CreateButton />     
    </header>
     );
  }
}
 
export default Header;