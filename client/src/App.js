import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect, useState } from 'react'
import AppLogin from './components/AppLogin'
import Sidebar from './components/Sidebar'
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function App() {
  const accessToken = useAuth()
  const { code, dispatch, player } = useDataContext()
  const newCode = new URLSearchParams(window.location.search).get("code")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    if (newCode) dispatch({type: 'SET_CODE' , payload: newCode })
  }, [])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken })
  }, [accessToken])

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch({
          type: 'STORE_PLAYLISTS',
          payload: response.data
        });

      } catch (error) {
      }
    };

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch({
          type: 'STORE_ALBUMS',
          payload: response.data
        });
      } catch (error) {
      }
    };
    fetchPlaylists();
    fetchAlbums();
  }, [accessToken])

  return (
    code ? (
      welcome ? (
        <Dashboard />
      ) : (
        isNewUser ? (
          <>
            <div>
              <h1>Register</h1>
              <form onSubmit={(e) => {
                e.preventDefault();
                (async () => {
                  try {
                    const response = await axios.post('http://localhost:3002/users', {
                      username,
                      email,
                      password,
                    });
                    console.log('Register response:', response);
                    dispatch({ type: 'SET_USER', payload: response.data });
                    setWelcome(true)
                  } catch (error) {
                    console.error('Register error:', error);
                  }
                })();
              }}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Register</button>
              </form>
            </div>
            <button
              onClick={() => setIsNewUser(false)}
            >
              Already a User?
            </button>
          </>
        ) : (
          <>
            <div>
            <h1>Login</h1>
            <form
              onSubmit={(e) => {
              e.preventDefault();
              (async () => {
                try {
                  const response = await axios.get('http://localhost:3002/users', {
                    params: {
                      username,
                      password,
                    }
                  });
                  console.log('Register response:', response);
                  dispatch({ type: 'SET_USER', payload: response.data });
                  setWelcome(true)
                } catch (error) {
                  console.error('Register error:', error);
                }
              })();
            }}
            >
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
            </div>
            <button
              onClick={() => setIsNewUser(true)}
            >
              New User?
            </button>
          </>
        )
      )
    ) : (
      <Login />
    )
  )
}
export default App;

