import styles from "@/styles/inputs/Select.module.scss";
import { useEffect, useRef, useState, useMemo } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface PropsType {
  value: string | null;
  placeholder: string;
  options: {
    title: string;
    value: string;
    disabled: boolean;
  }[];
  handleSelect: (value: string) => void;
}

export default function Select(props: PropsType) {
  const { value, placeholder, options, handleSelect } = props;
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  function toggleDropdown() {
    setIsOpened((prev) => !prev);
  }

  function select(val: string) {
    const option = options.find((opt) => opt.value === val);
    if (option?.disabled) return;
    handleSelect(val);
    setIsOpened(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={selectRef}
      className={`${styles.select} ${isOpened ? styles.opened : ""}`}
    >
      <button
        type="button"
        className={styles.select_button}
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        onClick={toggleDropdown}
      >
        {selectedOption?.title || placeholder}
        <FaAngleDown />
      </button>

      {isOpened && (
        <div className={styles.select_options} role="listbox">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.option} ${
                opt.disabled ? styles.disabled : ""
              }`}
              role="option"
              aria-disabled={opt.disabled}
              onClick={() => select(opt.value)}
            >
              <p>{opt.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
