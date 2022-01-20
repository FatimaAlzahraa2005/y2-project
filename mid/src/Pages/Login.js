import React from "react";
const Login = ({ setAuth }) => {
  const saveItem = () => {
    localStorage.setItem("auth", "true");
    setAuth("true");
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <button onClick={saveItem} className="btn btn-primary">
        
      </button>
    </div>
  );
};

export default Login;