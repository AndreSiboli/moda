import Container from "@/components/layout/Container";
import styles from "@/styles/ui/loading/StoreSkeleton.module.scss";

export default function StoreSkeleton() {
  return (
    <>
      <div className={styles.skeleton}>
        <div className={styles.skeleton_wallpaper} />
        <Container>
          <div className={styles.skeleton_container}>
            <div className={styles.skeleton_content}>
              <div className={styles.content_title}>
                <div className={styles.skeleton_title} />
              </div>
              <div className={styles.content_text}>
                <div className={styles.skeleton_text} />
                <div className={styles.skeleton_text} />
                <div className={styles.skeleton_text} />
                <div className={styles.skeleton_text} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.collection}>
        <div className={styles.collection_manager}>
          <div className={styles.skeleton_title} />
          <div className={styles.skeleton_default} />
        </div>
        <div className={`${styles.collection_group} `}>
          {Array.from({ length: 4 }, (_, i) => (
            <div className={styles.skeleton_card} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
