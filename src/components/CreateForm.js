import React from 'react';
import Keymenu from "./Keymenu";
import config from '../config';
import SongsContext from '.././context/SongsContext';
import  BackButton  from "./BackButton";

class CreateFrom extends React.Component {
    constructor(props) {
        super(props)
            this.state = { 
                title: {
                    value: '',
                    touched: false
                  },
                content: {
                    value: '',
                    touched: false
                },
                songkey: {
                    value: 'Chromatic',
                    touched: false
                }

                
            };
        }
        static contextType = SongsContext;

        updateTitle(title) {

            this.setState({
                title: {value: title, touched: true}
            });
        }
    
        updateContent(content) {
            this.setState({
                content: {value: content, touched: true}
            });
        }

        updateSongkey(songkey) {
          this.setState({
              songkey: {value: songkey, touched: true}
          });
      }


  handleSubmit(event){
    event.preventDefault();
    
    const title = this.state.title.value;
    const content = this.state.content.value;
    // const songId = this.state.songId.value;
    const songkey = this.state.songkey.value;

   // potentially submit these values to the server here
    const data = {
        title,
        songkey,
        // songId,
        content,
      };
      
  
      fetch(`${config.API_ENDPOINT}/songs`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        if (!res.ok) {
          throw new Error(`Error with POST request: ${res}`);
        }
        return res.json();
      })
      .then((resp) => {
        this.context.addSong(resp);
        console.log(this.context)
        this.props.history.push('/songs');
      })
      .catch(err => {
        console.log(err.message);
      });
}
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
                    onChange={e => this.updateTitle(e.target.value)}
                    required/>
                    {this.state.title.touched}
                <Keymenu 
                label={'Select A Key'}
                onChange={e => this.updateSongkey(e.target.value)}
                />
                <label htmlFor="add-song-content">Lyrics *</label>
                    <textarea
                        rows="5"
                        cols="33"
                        className="AddSong__control"
                        name="add-song-content" 
                        id="add-song-content"
                        onChange={e => this.updateContent(e.target.value)}
                        required/>
                        {this.state.content.touched}
                </div>
                

        
                <div className="CreateSong__button__group">
                <BackButton lable={'cancel'}/>
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