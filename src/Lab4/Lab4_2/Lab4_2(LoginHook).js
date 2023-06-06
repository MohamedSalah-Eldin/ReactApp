import React, { useState, useEffect } from 'react';

const LoginHooks = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(`User is logged in: ${isLoggedIn}`);
  }, [isLoggedIn]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name == 'username') {
      setUsername(value);
    } else if (name == 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    setIsLoggedIn(true);
    console.log(`Name: ${username}, Password: ${password}`);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginHooks;