import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../Utils/userSlice"
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../Utils/Constants";

const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const{uid,email,displayName}=user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse")
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/")
          }
        });
        return ()=>unsubscribe();  //unsubscribing when the component unmounts (just like removing an event listener)
      },[])
return <>
<div className="absolute z-10 px-8 py-6 bg-gradient-to-b from-black w-screen">
    <img className="w-44" src={LOGO} alt="logo"/>
</div>
    

</>



}
export default Header;