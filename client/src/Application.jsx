import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import SessionPage from './pages/SessionPage';
import HistoryPage from './pages/HistoryPage';
import ArtistPage from './pages/ArtistPage';
import SpotifyApp from './components/SpotifyApp';
import './App.css';
import AlbumView from './pages/AlbumView';
import Sidebar from './components/Sidebar';
import SpotifyConsoleLayout from './components/SpotifyConsoleLayout';
import PlaylistView from './pages/PlaylistView';
import MyPlaylists from  './pages/MyPlaylists';
import MyAlbums from './pages/MyAlbums';
import SpotifyHome from './pages/SpotifyHome';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path="spotify" element={<SpotifyApp />}>
      <Route index element={<SpotifyHome />} />

      <Route path="album" element={<AlbumView />} />

    </Route>
  </Route>
))

function Application() {
  return (
    <RouterProvider router={router} />
  );
}

export default Application;