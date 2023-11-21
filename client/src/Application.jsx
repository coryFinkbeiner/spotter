import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import SpotifyHome from './pages/SpotifyHome';
import SpotifyApp, { loader as libraryLoader } from './components/SpotifyApp';




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route
      path="spotify"
      element={<SpotifyApp />}
      loader={libraryLoader}
    >

      <Route index element={<SpotifyHome />} />

    </Route>
  </Route>
))

function Application({code}) {

  return (
    <RouterProvider router={router} />
  );
}

export default Application;