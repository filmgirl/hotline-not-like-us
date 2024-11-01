import * as React from "react";
import { createRoot } from "react-dom/client";
import { SparkApp, Button } from "@github/spark/components";

function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
      console.log("Autoplay prevented:", error);
      setIsPlaying(false);
    });
  }, []);

  const toggleAudio = () => {
    const audio = document.getElementById('background-audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <video autoPlay muted loop id="background-video" className="fixed z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="https://cmacdropshare.s3.us-east-1.amazonaws.com/hotline-bling-no-audio.mp4" type="video/mp4" />
      </video>
      <audio id="background-audio" loop autoPlay>
        <source src="https://cmacdropshare.s3.us-east-1.amazonaws.com/Not%20Like%20Us.mp3" type="audio/mpeg" />
      </audio>
      <div className="fixed bottom-4 right-4 z-10">
        <Button 
          onClick={toggleAudio} 
          className="bg-pink-200 hover:bg-pink-300 text-gray-800 font-bold py-2 px-4 rounded shadow-lg"
        >
          {isPlaying ? 'Pause Audio' : 'Play Audio'}
        </Button>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <SparkApp>
    <App />
  </SparkApp>
);

