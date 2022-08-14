import logo from './logo.svg';
import './App.css';

function App() {
  function handleCredentialResponse(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
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
        <div id="g_id_onload"
             data-client_id="907100418669-pa4c1oeginl8k39430qsv4gjgpdp3jmi.apps.googleusercontent.com"
             data-callback="handleCredentialResponse">
        </div>
        <div className="g_id_signin" data-type="standard"></div>
      </header>
    </div>
  );
}

export default App;
