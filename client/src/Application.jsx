import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import SessionPage from './pages/SessionPage';
import HistoryPage from './pages/HistoryPage';
import ArtistPage from './pages/ArtistPage';
import SpotifyLayout from './components/SpotifyLayout';
import './App.css';
import AlbumView from './pages/AlbumView';
import Sidebar from './Sidebar';
import SpotifyConsoleLayout from './components/SpotifyConsoleLayout';
import PlaylistView from './pages/PlaylistView';
import MyPlaylists from  './pages/MyPlaylists';
import MyAlbums from './pages/myAlbums';
import SpotifyHome from '/pages/SpotifyHome';

function Application() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="session" element={<SessionPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="spotify" element={<SpotifyLayout />}>

            <Route path="sidebar" element={<Sidebar />} >
              <Route path="albums" element={<MyAlbums />} />
              <Route path="playlists" element={<MyPlaylists />} />
            </Route>

            <Route path="console" element={<SpotifyConsoleLayout />} >
              <Route index element={<SpotifyHome />} />
              <Route path="artist" element={<ArtistPage />} />
              <Route path="album" element={<AlbumView />} />
              <Route path="playlist" element={<PlaylistView />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Application;