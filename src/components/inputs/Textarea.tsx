import styles from "@/styles/inputs/Textarea.module.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface PropsType {
  data: {
    id: string;
    text: string;
  };
}

export default function Textarea(props: PropsType) {
  const { data } = props;

  return (
    <div className={styles.textarea}>
      <textarea
        name={data.id}
        id={data.id}
        className={raleway.className}
        placeholder=""
      ></textarea>

      <label htmlFor={data.id}>{data.text}</label>
    </div>
  );
}
