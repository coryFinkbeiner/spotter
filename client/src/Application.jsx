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

import { useData } from './DataProvider';



// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<AppLayout />}>
//     <Route index element={<Home />} />
//     <Route
//       path="spotify"
//       element={<SpotifyApp />}
//       loader={() => myLibrary}
//     >

//       <Route index element={<SpotifyHome />} />

//     </Route>
//   </Route>
// ))

function Application() {

  const { myLibrary } = useData();

  return (
    <RouterProvider

      router={

        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="spotify"
              element={<SpotifyApp />}
              loader={() => myLibrary}
            >

              <Route index element={<SpotifyHome />} />

            </Route>
          </Route>
        ))




      }

    />
  );
}

export default Application;