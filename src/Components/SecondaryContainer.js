import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-40 ">
      <div className=""><MovieList title="Trending" movies={movies.nowPlayingMovies}/></div>
      <div className=""><MovieList title="Top Rated"movies={movies.TopRatedMovies}/></div>
      <div className=""><MovieList title="Popular" movies={movies.nowPlayingMovies}/></div>
      <div className=""><MovieList title="Horror" movies={movies.nowPlayingMovies}/></div>
      </div>
      
      
    </div>
  );
};

export default SecondaryContainer;
