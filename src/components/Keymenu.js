import React from 'react';

class Keymenu extends React.Component {
  state = {  }
  render() { 
    return (
     <div className= 'key_menu'>
       <div class="col-25">
        <label htmlFor="song_keys">{this.props.label}</label>
      </div>
        <select 
        id="song_keys"
        onChange={this.props.onChange}
        
        >
        <option value="Chromatic">Chromatic</option>
          <option value="C/Am">C/Am</option>
          <option value="C#/A#m">C#/A#m</option>
          <option value="D/Bm">D/Bm</option>
          <option value="D#/Cm">D#/Cm</option>
          <option value="E/C#m">E/C#m</option>
          <option value="F/Dm">F/Dm</option>
          <option value="F#/D#m">F#/D#m</option>
          <option value="G/Em">G/Em</option>
          <option value="G#/Fm">G#/Fm</option>
          <option value="A/F#m">A/F#m</option>
          <option value="A#/Gm">A#/Gm</option>
          <option value="B/G#m">B/G#m</option>
        </select>
      </div>
     );
  }
}
 
export default Keymenu;