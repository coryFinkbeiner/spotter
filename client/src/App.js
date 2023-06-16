

import SpotifyWebApi from "spotify-web-api-node"

import './App.css';

import useAuth from "./hooks/useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

// const AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=b5fd7277f6654b3e881be98a94afd5fc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


function App() {

  const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b5fd7277f6654b3e881be98a94afd5fc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

  return (
    <div className="App">
      Hello
      <button onClick={() => (window.location.href = AUTH_URL)}>
        Login With Spotify
      </button>
    </div>
  );
}

export default App;
