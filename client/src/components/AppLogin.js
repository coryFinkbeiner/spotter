import React, { useState } from 'react';

const Register = ({ email, setEmail }) => (



  <div>
    <input
      type="text"
      placeholder="Username"
      // Add your username handling logic here
      required
    />
    <input
      type="password"
      placeholder="Password"
      // Add your password handling logic here
      required
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>




);

const Login = () => (
  <div>
    <input
      type="text"
      placeholder="Username"
      // Add your username handling logic here
      required
    />
    <input
      type="password"
      placeholder="Password"
      // Add your password handling logic here
      required
    />
  </div>
);

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

      {isNewUser ? (
        <Register email={email} setEmail={setEmail} />
      ) : (
        <Login />
      )}

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
