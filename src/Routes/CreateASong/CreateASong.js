import React from 'react';
import './CreateASong.css'
import BackButton from '../../components/BackButton';
import CreateForm from '../../components/CreateForm';

class CreateASong extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <BackButton />
        <h1>Create A Song Rendering</h1>
        <CreateForm />

      </div>
     );
  }
}
 
export default CreateASong;