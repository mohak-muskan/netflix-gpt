import {
   RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./login";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
      },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  },[])

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  );
};
export default Body;
