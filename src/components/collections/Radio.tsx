import styles from "@/styles/collections/Radio.module.scss";
import { TbRectangleVertical, TbRectangleVerticalFilled } from "react-icons/tb";

interface PropsType {
  id: string;
  grid: string;
  handleValue: (str: string) => void;
}

export default function Radio(props: PropsType) {
  const { id, grid, handleValue } = props;

  function change() {
    handleValue(id);
  }

  return (
    <div className={styles.radio}>
      <input type="radio" name="grid" id={id} value={id} onChange={change} />
      <label htmlFor={id}>
        {Array.from({ length: Number(id) }, (_, index) => index + 1).map(
          (svg) =>
            grid === `grid-${id}` ? (
              <TbRectangleVerticalFilled key={svg} />
            ) : (
              <TbRectangleVertical key={svg} />
            )
        )}
      </label>
    </div>
  );
}
