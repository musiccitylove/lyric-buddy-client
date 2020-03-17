import React from 'react'

const SongsContext = React.createContext({
  songs: [],
  addSong: () => {},
  deleteSong: () => {}
})

export default SongsContext