import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../Utils/Constants";

const useMovieAPI=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies = async () => {
      
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json.results))
  
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
}
export default useMovieAPI;