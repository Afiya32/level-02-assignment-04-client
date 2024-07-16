import { Player } from '@lottiefiles/react-lottie-player';
import errorAnimation from '../assets/animation/error404.json';

const ErrorPage = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src={errorAnimation}
        style={{ height: '300px', width: '300px' }}
      />
      <p className="mt-4 text-xl">{message || 'Something went wrong'}</p>
    </div>
  );
};

export default ErrorPage;