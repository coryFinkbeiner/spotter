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
    <div className="d-flex justify-content-center"
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
      }}
    >
      <Sidebar />
      <div style={{ flex: '0 0 540px', minWidth: '540px', backgroundColor: 'lightblue' }}>
        {consoleViewType === 'SearchView' && <Search />}
        {consoleViewType === 'AlbumView' && <AlbumView />}
        {consoleViewType === 'ArtistView' && <ArtistView />}
        {consoleViewType === 'PlaylistView' && <PlaylistView />}
      </div>
    </div>
  );
}

export default Dashboard