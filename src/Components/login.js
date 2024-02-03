import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="banner"
        />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-black bg-opacity-80 rounded-lg">
        <h1 className="text-white mb-4 pl-0 font-bold text-3xl">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
          type="text"
            className="p-2 my-4 mx-0 w-full bg-gray-700"
            placeholder="Full Name"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-4 mx-0 w-full bg-gray-700 "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-6 mx-0 w-full bg-gray-700 "
        ></input>
        <button className="bg-red-700 text-white p-4 my-4 mx-0 w-full px-2 rounded-lg">
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
