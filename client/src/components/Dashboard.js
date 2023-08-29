import React from 'react'
import Queue from './Queue'
import Search from './Search'
import Sidebar from './Sidebar'
import { useDataContext } from '../hooks/useDataContext';
import AlbumView from './AlbumView'
import PlaylistView from './PlaylistView'
import ArtistView from './ArtistView'
import Lowbar from './Lowbar'

function Dashboard() {

  const { consoleViewType } = useDataContext();

  return (
    <div
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
      }}>
      <div className="d-flex justify-content-center">
        <Sidebar />
        <div style={{ flex: '0 0 540px', minWidth: '540px' }}>
          {consoleViewType === 'SearchView' && <Search />}
          {consoleViewType === 'AlbumView' && <AlbumView />}
          {consoleViewType === 'ArtistView' && <ArtistView />}
          {consoleViewType === 'PlaylistView' && <PlaylistView />}
          {consoleViewType === 'QueueView' && <Queue />}
        </div>
      </div>
      <div
        style={{
          height: '13vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Lowbar />
      </div>
    </div>
  );
}

export default Dashboard