import { useEffect, useRef, useState } from "react";
import soundFile from "../assets/8bit.mp3";
import styles from "./NoStrangersToLove.module.css";
import { IoIosWarning } from "react-icons/io";

const NoStrangersToLove = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "k" || event.key === "K") {
        playAudio();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setOverlayVisible(true);
      console.log(overlayVisible);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setOverlayVisible(false);
    }
  };

  const moveButton = () => {
    if (buttonRef.current) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      const newTop = Math.random() * (viewportHeight - buttonHeight);
      const newLeft = Math.random() * (viewportWidth - buttonWidth);

      setButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    }
  };

  return (
    <>
      <div>
        {isPlaying ? (
          <>
            <div className={styles.overlay}></div>
            <div
              style={{
                width: "200px",
                height: "200px",
                top: buttonPosition.top,
                left: buttonPosition.left,
                position: "absolute",
                transition: "all 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1001",
              }}
              onMouseEnter={moveButton}
            >
              <button
                ref={buttonRef}
                onClick={stopAudio}
                style={{ position: "relative" }}
              >
                Stop Audio
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoIosWarning />
            <strong>Do not press K</strong>
            <IoIosWarning />
          </div>
        )}
        <audio ref={audioRef} src={soundFile} />
      </div>
    </>
  );
};

export default NoStrangersToLove;
