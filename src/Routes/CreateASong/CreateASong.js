import React from 'react';
import './CreateASong.css'
import CreateForm from '../../components/CreateForm';

class CreateASong extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Create A New Masterpiece</h1>
        <CreateForm history={this.props.history}/>

      </div>
     );
  }
}
 
export default CreateASong;