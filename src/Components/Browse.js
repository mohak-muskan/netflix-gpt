import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import useMovieAPI from "../Hooks/useMovieAPI";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

const Browse = () => {


  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

      })
      .catch((error) => {
        // An error happened.

      });
  };
  useMovieAPI();
  useTopRatedMovies();
  
  return (
    <>
      <Header className="z-10" /> {/* Assuming 'Header' is a component */}
      <div className="z-20 absolute top-0 right-4 flex items-center h-24">
        <button
          className="bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleClick}
        >
          Sign Out
        </button>
      </div>
      <Maincontainer/>
      <SecondaryContainer/>
    </>
  );
};
export default Browse;
