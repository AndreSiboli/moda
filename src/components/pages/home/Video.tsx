import styles from "@/styles/pages/home/Video.module.scss";

export default function Video() {
  return (
    <div className={styles.video}>
      <video
        src="./7322712-uhd_2880_2160_25fps.mp4"
        className={styles.video_mp4}
        loop
        autoPlay
        muted
      ></video>
    </div>
  );
}
