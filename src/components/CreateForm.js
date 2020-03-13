import React from 'react';
import Keymenu from "./Keymenu";

class CreateFrom extends React.Component {
  state = {  }
  render() { 
    return ( 
      <form className="CreateSong" onSubmit={e => this.handleSubmit(e)}>
                <h2>Create A New Song</h2>
                <div className="CreateSong__hint">* required field</div>  
                <div className="form-group">
                <label htmlFor="add-title">Song Title *</label>
                <input 
                    type="text" 
                    className="AddTitle__control"
                    name="add-song-name" 
                    id="add-song-name"
                    required/>
                <Keymenu label={'Select A Key'}/>
                <label htmlFor="add-song-content">Lyrics *</label>
                    <textarea
                        rows="5"
                        cols="33"
                        className="AddSong__control"
                        name="add-song-content" 
                        id="add-song-content"
                        required/>
                </div>
                

        
                <div className="CreateSong__button__group">
                    <button type="reset" className="CreateSong__button">
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="CreateSong__button"
                        >
                        Save
                    </button>
                </div>
          </form>
     );
  }
}
 
export default CreateFrom;