import React, { useState, useEffect } from "react";
import LoginHooks from "./Lab4_2(LoginHook)";

const SignupHooks = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  

  const handleSubmit = (event) => {      
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    setTimeout(() => {
      setIsSignedUp(true);

    });
  };

 





  useEffect(() => {
    console.log(`User is signed up: ${isSignedUp}`);
  }, [isSignedUp]);

  return (
    <div>
      {isSignedUp ? (
        <LoginHooks/>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignupHooks;
