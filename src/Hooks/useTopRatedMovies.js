import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../Utils/Constants";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const getTopRatedMovies = async () => {
      
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
      );
      const json = await data.json();
      
      dispatch(addTopRatedMovies(json.results))
      
  
    };
    useEffect(() => {
      getTopRatedMovies();
    }, []);
  
}
export default useTopRatedMovies;