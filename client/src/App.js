import Login from './components/Login'
import Dashboard from "./components/Dashboard"

import SpotifyWebApi from "spotify-web-api-node"

import './App.css';

import useAuth from "./hooks/useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})



function App() {
  const code = new URLSearchParams(window.location.search).get("code")


  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
