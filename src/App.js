import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (user?._id || gsiScriptLoaded) return

    const initializeGsi = () => {
      // Typescript will complain about window.google
      // Add types to your `react-app-env.d.ts` or //@ts-ignore it.
      if (!window.google || gsiScriptLoaded) return

      setGsiScriptLoaded(true)
      window.google.accounts.id.initialize({
        client_id: "907100418669-pa4c1oeginl8k39430qsv4gjgpdp3jmi.apps.googleusercontent.com",
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
      );
    }

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.onload = initializeGsi
    script.async = true
    script.id = "google-client-script"
    document.querySelector("body")?.appendChild(script)

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel()
      document.getElementById("google-client-script")?.remove()
    }
  }, []);

  const handleGoogleSignIn = (res) => {
    if (!res.clientId || !res.credential) return

    console.log("respones", res);
    // Implement your login mutations and logic here.
    // Set cookies, call your backend, etc.
  }

  function callbackFacebook() {
    window.FB.getLoginStatus(function(response) {
      console.log(response);
    });
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
        <div id="buttonDiv" />
        <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with"
             data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </header>
    </div>
  );
}

export default App;
