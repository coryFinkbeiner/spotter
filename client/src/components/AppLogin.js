import React, { useState } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

const Login = ({setIsLoggedIn}) => {

  const { dispatch } = useDataContext()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3002/users', {
        params: {
          username: username,
          password: password,
        }
      });
      console.log('Login response:', response.data);
      dispatch({type: 'SET_USER', payload: response.data})
      setIsLoggedIn(true)

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
  );
};

const Register = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:3002/users', {
        username,
        email,
        password,
      });
      console.log('Register response:', response.data);
      setIsLoggedIn(true)
    } catch (error) {
      console.error('Register error:', error);
    }


  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
  );
};

const AppLogin = ({ setIsLoggedIn }) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div>
      <h1>{isNewUser ? 'Register' : 'Login'}</h1>
      {isNewUser ? <Register setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
      <p>
        {isNewUser ? 'Already have an account?' : 'New user?'}
        <button onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default AppLogin;
