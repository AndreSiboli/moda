import styles from "@/styles/buttons/Submit.module.scss";

import RalewayFont from "@/components/fonts/RalewayFont";

interface PropsType {
  text: string;
  handleSubmit: () => void;
}

export default function Submit(props: PropsType) {
  const { text, handleSubmit } = props;

  return (
    <button className={styles.button} onClick={handleSubmit}>
      <RalewayFont>{text}</RalewayFont>
    </button>
  );
}
