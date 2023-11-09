import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import SessionPage from './pages/SessionPage';
import HistoryPage from './pages/HistoryPage';
import ArtistPage from './pages/ArtistPage';
import MySpotify from './pages/MySpotify';
import SpotifyLayout from './components/SpotifyLayout';
import './App.css';
import AlbumView from './pages/AlbumView';



function Application() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="session" element={<SessionPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="spotify" element={<SpotifyLayout />}>
            <Route index element={<MySpotify />} />
            <Route path="artist" element={<ArtistPage />} />
            <Route path="album" element={<AlbumView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default Application;