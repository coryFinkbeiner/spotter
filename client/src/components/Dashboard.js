import React from 'react'
import MyQueue from './MyQueue'
import Search from './Search'
import Sidebar from './Sidebar'
import { useDataContext } from '../hooks/useDataContext';
import AlbumView from './AlbumView'
import PlaylistView from './PlaylistView'
import ArtistView from './ArtistView'

function Dashboard() {

  const { consoleView } = useDataContext();

  return (
    <div>Dashboard
      <MyQueue />
      {consoleView === 'Search' && <Search />}
      {consoleView === 'AlbumView' && <AlbumView />}
      {consoleView === 'ArtistView' && <ArtistView />}
      {consoleView === 'PlaylistView' && <PlaylistView />}
      <Sidebar />
    </div>
  )
}

export default Dashboard

// Search, Artist Page, Album Page, Playlist Page should conditionally render withing Console element.
  // Console element may not be a React component, probably won't be...


// Artist Page, Album Page and Playlist Page will be triggered by onClicks for Artists, Albums and Playlists

