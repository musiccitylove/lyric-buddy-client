import React from 'react'

const SongsContext = React.createContext({
  songs: [],
  addSong: () => {},
})

export default SongsContext