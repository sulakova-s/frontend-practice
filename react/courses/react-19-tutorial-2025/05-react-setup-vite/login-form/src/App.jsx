import { useState } from "react";
import "./App.css"

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <p className="title">Hello, welcome to my website</p>
      <div className="login-form">
        <div className="form-fields">
          <input placeholder="Email"></input>
          <div className="form-pass">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            ></input>
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="login-buttons">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
