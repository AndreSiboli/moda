import styles from "@/styles/inputs/Input.module.scss";

interface PropsType {
  input: {
    type: string;
    id: string;
  };
  text: string;
}

export default function Input(props: PropsType) {
  const { input, text } = props;
  const { type, id } = input;

  return (
    <div className={styles.input}>
      <input type={type} id={id} name={id} placeholder=" "/>
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
