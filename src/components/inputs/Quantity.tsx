"use cleint";

import { ChangeEvent, useRef, useState } from "react";
import styles from "@/styles/inputs/Quantity.module.scss";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { increaseItem, increaseTotal } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { CartUserType } from "@/_types/CartType";

interface PropsType {
  data: CartUserType;
}

export default function Quantity(props: PropsType) {
  const { data } = props;
  const [currentQuantity, setCurrentQuantity] = useState(data.quantity);
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const dispatch = useDispatch<AppDispatch>();

  function insertByButton(add: 1 | -1) {
    let newQuantityItems = currentQuantity + add;
    if (newQuantityItems > data.size.stock) newQuantityItems = data.size.stock;
    else if (newQuantityItems < 1) newQuantityItems = 1;

    setCurrentQuantity(newQuantityItems);
    addHowMany(newQuantityItems);
  }

  function insertByInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    let itemQuantity = 1;

    if (Number.isNaN(value)) return;

    itemQuantity = parseInt(value);

    if (itemQuantity > data.size.stock) itemQuantity = data.size.stock;
    else if (itemQuantity < 1) itemQuantity = 1;
    if (!itemQuantity) itemQuantity = 1;

    setCurrentQuantity(itemQuantity);
    addHowMany(itemQuantity);
  }

  function addHowMany(quantity: number) {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(async () => {
      //Db logic
      //...

      //Client logic
      dispatch(
        increaseItem({ id: data.id, quantity, size: data.size.size })
      );
      changeTotal();
    }, 700);
  }

  function changeTotal() {
    dispatch(increaseTotal());
  }

  return (
    <div className={styles.quantity}>
      <button
        onClick={() => insertByButton(-1)}
        aria-label="Button to decrease"
      >
        <FaMinus />
      </button>
      <input
        type="number"
        max={data.size.stock}
        min={1}
        value={currentQuantity}
        onChange={insertByInput}
        aria-label="How many items"
      />
      <button onClick={() => insertByButton(1)} aria-label="Button to increase">
        <FaPlus />
      </button>
    </div>
  );
}
