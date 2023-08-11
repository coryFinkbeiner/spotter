import React from 'react'
import MyQueue from './MyQueue'
import Search from './Search'
import Sidebar from './Sidebar'
import { useDataContext } from '../hooks/useDataContext';
import AlbumView from './AlbumView'
import PlaylistView from './PlaylistView'
import ArtistView from './ArtistView'

function Dashboard() {

  const { consoleViewType } = useDataContext();

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="console">
        {consoleViewType === 'SearchView' && <Search />}
        {consoleViewType === 'AlbumView' && <AlbumView />}
        {consoleViewType === 'ArtistView' && <ArtistView />}
        {consoleViewType === 'PlaylistView' && <PlaylistView />}
      </div>
      <MyQueue />
    </div>
  )
}

export default Dashboard