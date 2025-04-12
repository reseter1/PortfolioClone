import React, { useEffect, useRef } from "react";

function Pre(props) {
  const { load, getAudioRef } = props;
  const audioRef = useRef(null);

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
          }
        } catch (error) {
          console.error("Error loading audio:", error);
        }
      };

      playAudioWithRange("https://purehealthtt.alwaysdata.net/api/song-stream");
    }
  }, [load, getAudioRef]);

  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loader-text">Reseter Portfolio...</div>
    </div>
  );
}

export default Pre;
