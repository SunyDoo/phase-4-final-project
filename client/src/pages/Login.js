import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Button from "react-bootstrap/Button";

function Login({ setCurrentUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm setCurrentUser={setCurrentUser} />

          <p>
            Don't have an account?
            <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setCurrentUser={setCurrentUser} />

          <p>
            Already have an account?
            <Button onClick={() => setShowLogin(true)}>Log In</Button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
