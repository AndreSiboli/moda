import styles from "@/styles/buttons/Button.module.scss";
import RalewayFont from "../fonts/RalewayFont";

interface PropsType {
  text: string;
  handleFunction: () => any;
}

export default function Button(props: PropsType) {
  const { text, handleFunction } = props;

  return (
    <button className={styles.button} onClick={handleFunction}>
      <RalewayFont>{text}</RalewayFont>
    </button>
  );
}
