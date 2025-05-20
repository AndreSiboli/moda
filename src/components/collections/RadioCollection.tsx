import styles from "@/styles/collections/RadioCollection.module.scss";
import { ComponentProps } from "react";
import { TbRectangleVertical, TbRectangleVerticalFilled } from "react-icons/tb";

interface PropsType extends ComponentProps<"input"> {
  id: string;
  grid: string;
}

export default function RadioCollection(props: PropsType) {
  const { id, grid, ...rest } = props;

  return (
    <div className={styles.radio}>
      <input {...rest} type="radio" name="grid" id={id} value={id} />
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
