import { useState, useRef } from "react";
import video from "../resource/flower.mp4";

const VideoPlayer = () => {
  // false를 초기값으로 하는 state 생성
  const [isPlaying, setIsPlaying] = useState(false);
  // null을 초기값으로 하는 ref 객체 생성
  const ref = useRef(null);
  
  const handleClick = () => {
    // ref.current를 사용하여
    // 동영상이 재생 중이면 버튼의 동작을 pause로 설정하고,
    // 정지 중이면 버튼의 동작을 play로 설정함
    if(isPlaying) {
        ref.current.pause();
    } else {
        ref.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
        <video
            width="240"
            ref={ref}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        >
            <source src={video} type="video/mp4" />
        </video>
        <br/>
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
    </>
  );

};

export default VideoPlayer;
