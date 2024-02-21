import { useSelector } from "react-redux";
import useBackgroundVideo from "../Hooks/useBackgroundVideo";

const VideoBackground = ({ id }) => {
  
  useBackgroundVideo(id);
  const trailerKey = useSelector((store) => store.movies?.TrailerVideo);

  return (
    <>
      <div>
        <iframe className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/" + trailerKey+"?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
