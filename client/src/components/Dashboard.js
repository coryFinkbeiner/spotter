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
        </div>
      </div>
      <div
        style={{
          height: '13vh',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            // backgroundColor: 'red',
            height: 'full',
            width: '780px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div style={{ color: 'white', fontWeight: 'bold' }}>QUEUE</div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard