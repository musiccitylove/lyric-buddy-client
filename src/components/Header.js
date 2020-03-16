import React from 'react';
import Keymenu from './Keymenu'
import CreateButton from './CreateButton'


class Header extends React.Component {
  state = {  }
  render() { 
    return ( 
      <header>
      <h1>My Songs</h1>
      <CreateButton />
      <Keymenu label={'Sort By Key'}/>        
    </header>
     );
  }
}
 
export default Header;