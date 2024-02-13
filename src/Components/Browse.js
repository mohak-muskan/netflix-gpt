import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse=()=>{
    const navigate=useNavigate();
    
const handleClick=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
        
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
}
return<>
<Header className="z-10" /> {/* Assuming 'Header' is a component */}
<div className="z-20 absolute top-0 right-4 flex items-center h-24">
  <button
    className="bg-red-600 text-white py-2 px-4 rounded"
    onClick={handleClick}
  >
    Sign Out
  </button>
</div>
</>






}
export default Browse;