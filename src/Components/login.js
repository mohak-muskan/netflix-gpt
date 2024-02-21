import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Validation } from "../Utils/Validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { BANNER } from "../Utils/Constants";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate();
  const handleClick = () => {
    if (email.current.value === "" && password.current.value === "") {
      setErrorMessage("Fill out the fields first");
    }
    if (email.current.value === "" && !password.current.value === "") {
      setErrorMessage("Email cannot be empty");
    }
    if (password.current.value === "" && !email.current.value === "") {
      setErrorMessage("Password cannot be empty");
    }
    if (email.current.value && password.current.value) {
      setErrorMessage(Validation(email.current.value, password.current.value));
      if (errorMessage) return;
    }
    if (!isSignedIn) {
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode+"-"+errorMessage)
          
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    
  });

     
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className=""
          src={BANNER}
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-black bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white mb-4 pl-0 font-bold text-3xl">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            className="p-2 my-4 mx-0 w-full bg-gray-700 text-white"
            placeholder="Full Name"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-4 mx-0 w-full bg-gray-700 text-white "
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-6 mx-0 w-full bg-gray-700 text-white"
          ref={password}
        ></input>
        <p className="text-red-500 text-sm-">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="bg-red-700 text-white p-4 mt-5 mb-4 mx-0 w-full px-2 rounded-lg"
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white my-4">
          {isSignedIn ? "New to Netflix?" : "Already registered?"}{" "}
          <Link to="/" className="hover:underline" onClick={toggleSignIn}>
            {isSignedIn ? "Sign Up now" : "Sign In now"}
          </Link>
        </p>
      </form>
    </>
  );
};
export default Login;
