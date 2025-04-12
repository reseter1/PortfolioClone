import React, { useEffect, useRef, useState } from "react";

function Pre(props) {
  const { load, getAudioRef } = props;
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    if (load) {
      const audio = new Audio();
      audio.preload = "auto";

      const playAudioWithRange = async (url, start, end) => {
        try {
          const headers = {};
          if (start !== undefined && end !== undefined) {
            headers.Range = `bytes=${start}-${end}`;
          }

          const response = await fetch(url, { headers });
          const blob = await response.blob();
          const audioUrl = URL.createObjectURL(blob);

          audio.src = audioUrl;
          audio.addEventListener('canplaythrough', () => {
            console.log("Audio can play through without buffering");
            setAudioLoaded(true);
          });

          audioRef.current = audio;

          if (getAudioRef) {
            getAudioRef(audio);
          }

          try {
            await audio.play();
            console.log("Audio started playing in Pre component");
          } catch (playError) {
            console.error("Error auto-playing audio in Pre:", playError);
            setShowPlayButton(true);
          }
        } catch (error) {
          console.error("Error loading audio:", error);
        }
      };

      playAudioWithRange("https://purehealthtt.alwaysdata.net/api/song-stream");
    }
  }, [load, getAudioRef]);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio on button click:", error);
      });
    }
  };

  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loader-text">Reseter Portfolio...</div>
      {showPlayButton && audioLoaded && (
        <button
          onClick={handlePlayClick}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            background: '#623686',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Phát nhạc nền
        </button>
      )}
    </div>
  );
}

export default Pre;
