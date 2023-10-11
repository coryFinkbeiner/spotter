import React from 'react'
import Queue from './Queue'
import Search from './Search'
import Sidebar from './Sidebar'
import { useDataContext } from '../hooks/useDataContext';
import AlbumView from './AlbumView'
import PlaylistView from './PlaylistView'
import ArtistView from './ArtistView'
import Lowbar from './Lowbar'
import Home from './Home'
import HistoryView from './HistoryView'
import RedView from './RedView'
import YellowView from './YellowView'
import BlueView from './BlueView'


function Dashboard() {

  const { consoleViewType } = useDataContext();

  return (
    <div
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
      }}>
      <div className="d-flex justify-content-center"
        style={{

        }}
      >
        <Sidebar />
        <div style={{ flex: '0 0 540px', minWidth: '540px' }}>
          {consoleViewType === 'SearchView' && <Search />}
          {consoleViewType === 'AlbumView' && <AlbumView />}
          {consoleViewType === 'ArtistView' && <ArtistView />}
          {consoleViewType === 'PlaylistView' && <PlaylistView />}
          {consoleViewType === 'QueueView' && <Queue />}
          {consoleViewType === 'Home' && <Home />}
          {consoleViewType === 'HistoryView' && <HistoryView />}
          {consoleViewType === 'RedView' && <RedView />}
          {consoleViewType === 'YellowView' && <YellowView />}
          {consoleViewType === 'BlueView' && <BlueView />}
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'black',
          paddingBottom: '6px',
        }}
      >
        <Lowbar />
      </div>

    </div>
  );
}

export default Dashboard