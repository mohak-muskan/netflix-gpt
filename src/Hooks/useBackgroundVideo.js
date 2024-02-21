import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../Utils/moviesSlice';
import { options } from '../Utils/Constants';

const useBackgroundVideo = (id) => {
    const dispatch=useDispatch();
    
    const getMovieVideos = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US"
        ,
        options
      );
      const json = await data.json();
      json.results.forEach(obj => {
        if (obj.name.toLowerCase().includes('trailer')) {
            dispatch(addTrailerVideo(obj.key));
        }
    });
    
  
      
      
      
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useBackgroundVideo