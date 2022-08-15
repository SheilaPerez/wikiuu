import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from "./login/google/GoogleLogin";
import {GoogleRegister} from "./register/google/GoogleRegister";
import {useEffect} from "react";

function App() {

  const onFBLogin = (response) => {
    console.log("facebook response", response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoogleLogin />
        <GoogleRegister />
        <div className="fb-login-button" data-width="277" data-size="large" data-button-type="login_with"
             data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-onlogin={onFBLogin}></div>
      </header>
    </div>
  );
}

export default App;
