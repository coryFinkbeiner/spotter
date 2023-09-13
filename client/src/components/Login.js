import React, { useState } from 'react'
// import AppLogin from './AppLogin'

import { useDataContext } from '../hooks/useDataContext';



const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b5fd7277f6654b3e881be98a94afd5fc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20app-remote-control"

function Login() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)


  const { dispatch } = useDataContext()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(true);


  return (
    isLoggedIn ? (
      <button onClick={() => (window.location.href = AUTH_URL)}>
        Login With Spotify
      </button>
    ) : (
      <div>
        { isNewUser ? (

          <div>
            <h1>Register</h1>
          </div>


        ) : (

          <div>
            <h1>Login</h1>
          </div>

        )}

      </div>

    )
  );
}

export default Login