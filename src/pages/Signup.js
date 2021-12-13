import React, { useState } from "react";
//Components
import PasswordInput from "../components/input-fields/PasswordInput";
import BlankInput from "../components/input-fields/BlankInput";
//CSS
import "./login/login.css";
//MUI
import { Button, Checkbox, FormControlLabel } from "@mui/material/";
//Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const handleSignup = async () => {
     await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setError(error.message)
        // ..
      });
  }


  const auth = getAuth();

  
  return (
    <>
      <div>
      {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
        <input label="E-mail" value={email} onChange={handleEmail}></input>
        <input
          label="Passowrd"
          value={password}
          onChange={handlePassword}
        ></input>
      </div>
      <div>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={handleSignup}
        >
          Sign up
        </Button>
      </div>
    </>
  );
};

export default Signup;
