"use client";

import { useRef, useState } from "react";
import styles from "@/styles/pages/home/Video.module.scss";

import Container from "@/components/layout/Container";

import { PiPause, PiPlay } from "react-icons/pi";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function defineIsPlaying() {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying((prevState) => !prevState);
  }

  return (
    <div className={styles.merchant_video}>
      <div className={styles.video}>
        <video
          src="./video.mp4"
          className={styles.video_mp4}
          loop
          autoPlay
          muted
          ref={videoRef}
        ></video>

        <div className={styles.video_manager}>
          <Container>
            <div className={styles.manager_container}>
              <button onClick={defineIsPlaying} aria-label="Play/pause">
                {isPlaying ? <PiPause /> : <PiPlay />}
              </button>
            </div>
          </Container>
        </div>
      </div>

      {/* <Container>
        <div className={styles.video_container}>
          <h1>Have you seen the new summer collection?</h1>

          <div className={styles.video_button}>
            <LinkButton href="/collections/summer" text="Go now!" />
          </div>
        </div>
      </Container> */}

      {/* <span></span> */}
    </div>
  );
}
