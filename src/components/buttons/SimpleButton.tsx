import styles from "@/styles/buttons/SimpleButton.module.scss";
import RalewayFont from "../fonts/RalewayFont";

interface PropsType {
  text: string;
  handleFunction: () => any;
}

export default function SimpleButton(props: PropsType) {
  const { text, handleFunction } = props;

  return (
    <button className={styles.button} onClick={handleFunction}>
      <RalewayFont>{text}</RalewayFont>
    </button>
  );
}
