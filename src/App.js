import './App.css';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

function App() {
  const handleLogin = googleData => {
    let url = "https://localhost:5001/api/auth/google-signin";
    console.log("googleData", googleData);
    let data = {
      idToken: googleData.tokenId,
      provider: 'google'
    }
    console.log("data", data);
    axios.post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // store returned user somehow
  }

  const responseFacebook = (response) => {
    console.log(response);
    let url = "https://localhost:5001/api/auth/facebook-signin";
    let data = {
      idToken: response.accessToken,
      provider: 'facebook'
    }
    axios.post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <GoogleLogin
        clientId="510962371813-nru06ie11stghcr7eh9kloh5610a5hih.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="1018925715360657"
        autoLoad={true}
        fields="name,email,picture,tokenId"
        callback={responseFacebook} />
    </div>
  );
}

export default App;
