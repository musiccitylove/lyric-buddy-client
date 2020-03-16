import React from 'react';
import './CreateASong.css'
import BackButton from '../../components/BackButton';
import CreateForm from '../../components/CreateForm';

class CreateASong extends React.Component {
  state = {  }
  render() { 
    console.log(this.props)
    return ( 
      <div>
        <h1>Create A Song Rendering</h1>
        <CreateForm history={this.props.history}/>

      </div>
     );
  }
}
 
export default CreateASong;