import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import SpotifyWebApi from "spotify-web-api-node"

function App() {
  const code = new URLSearchParams(window.location.search).get("code")

  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
