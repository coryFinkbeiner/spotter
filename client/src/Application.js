import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import SessionPage from './pages/SessionPage';
import HistoryPage from './pages/HistoryPage';
import ArtistPage from './pages/ArtistPage';
import MySpotify from './pages/MySpotify';
import SpotifyLayout from './components/SpotifyLayout';



function Application() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="SessionPage" element={<SessionPage />} />
          <Route path="HistoryPage" element={<HistoryPage />} />
          <Route path="MySpotify" element={<SpotifyLayout />}>
            <Route index element={<MySpotify />} />
            <Route path="ArtistPage" element={<ArtistPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default Application;