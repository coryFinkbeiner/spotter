import React, { useState } from 'react';

const AppLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    console.log('Logging in with username:', username, 'and password:', password);
  };

  const handleRegister = () => {
    console.log('Registering new user with username:', username, 'email:', email, 'and password:', password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewUser) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <h1>{isNewUser ? 'Register' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        {isNewUser && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
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
        <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
      </form>
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
