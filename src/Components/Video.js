import useTrailor from '../customHooks/useTrailor';
const Video = ({ id }) => {
 const trailer=useTrailor(id)
  return (
    <div className='w-[100%]'>
      <iframe className=" w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default Video;
