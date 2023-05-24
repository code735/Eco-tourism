import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';

export default function Login() {
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var user_obj = jwtDecode(response.credential)

    console.log(user_obj)
  }

  useEffect(() => {
    /*eslint-disable no-undef*/
    google.accounts.id.initialize({
      client_id: '373264275746-eju7u5qlvit8e986i1b552dn49nb0nvt.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    );
    /*eslint-enable no-undef*/
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}
