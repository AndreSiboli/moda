import styles from "@/styles/collections/Sort.module.scss";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";

interface PropsType {
  sort: string;
  handleValue: (str: string) => void;
}

export default function Sort(props: PropsType) {
  const { sort, handleValue } = props;
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: "Best Ratings", value: "br", default: true },
    { name: "High to Low", value: "hl" },
    { name: "Low to High", value: "lh" },
  ];

  function defineIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function onChange(value: string) {
    handleValue(value);
  }

  return (
    <div className={`${styles.sort} ${isOpen && styles.opened}`}>
      <div className={styles.sort_title} onClick={defineIsOpen}>
        <p>Sort</p>
        <PiPlus />
      </div>
      <div className={styles.sort_container}>
        <div className={styles.sort_options}>
          {options.map((option) => (
            <div
              className={`${styles.option} ${
                sort === option.value && styles.selected
              }`}
              key={option.value}
            >
              <input
                type="radio"
                id={option.value}
                name="sort"
                defaultChecked={option.default}
                onChange={() => onChange(option.value)}
              />
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
