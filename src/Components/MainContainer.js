import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const Maincontainer = () => {
    const movie=useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movie)return
   const title=movie[8].original_title;
   const overview=movie[8].overview

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      
      <VideoBackground id={movie[8].id}/>
    </div>
  );
};
export default Maincontainer;
