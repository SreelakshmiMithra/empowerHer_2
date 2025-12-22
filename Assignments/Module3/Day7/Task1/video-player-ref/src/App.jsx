import { useRef } from "react";

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div className="app-container">
      <h2>Custom Video Player (useRef)</h2>

      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div>
        <button onClick={playVideo}>▶ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
      </div>
    </div>
  );
}

export default App;
