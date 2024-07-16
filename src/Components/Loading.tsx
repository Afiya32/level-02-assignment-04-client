import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from "../assets/animation/loading.json"

const Loading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Player
          autoplay
          loop
          src={loadingAnimation}
          style={{ height: '300px', width: '300px' }}
        />
      </div>
    );
  };
  
  export default Loading;