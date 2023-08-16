import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBasketItemMinus,
  addItems,
  removeItems,
} from "../../../redux/slices/basketSlice";
import styles from "./CardButton.module.css";
import { useEffect } from "react";

function CardButton(props) {
  const { id, name, price, img } = props.date;

  const dispatch = useDispatch();
  const basketItem = useSelector((state) =>
    state.basket.items.find((obj) => obj.id === id)
  );
  const [isAmountValid, setIsAmountValid] = React.useState(!basketItem);
  const addedAmount = basketItem == undefined ? 0 : basketItem.amount;

  useEffect(() => {
    if (addedAmount === 0) {
      setIsAmountValid(true);
    }
  }, [addedAmount]);
  const addCountPlus = () => {
    const cartItemId = {
      id,
    };
    dispatch(addItems(cartItemId));
  };
  const addCountMinus = () => {
    if (basketItem.amount <= 1) {
      setIsAmountValid(true);
      dispatch(removeItems(id));
    } else {
      dispatch(setBasketItemMinus(id));
    }
  };

  const addOrder = () => {
    const cartItem = {
      id,
      name,
      price,
      img,
    };
    dispatch(addItems(cartItem));
    setIsAmountValid(false);
  };

  const inputQuantity = isAmountValid ? (
    <button onClick={addOrder}>Добавить</button>
  ) : (
    <div className={styles.inputContainer}>
      <div className={styles.input}>
        <div className={styles.quantityButton} onClick={addCountMinus}>
          <p>-</p>
        </div>
        <div>
          <p className={styles.newInput}>{addedAmount}</p>
        </div>
        <div className={styles.quantityButton} onClick={addCountPlus}>
          <p>+</p>
        </div>
      </div>
    </div>
  );

  return (
    <form className={styles.form}>
      <div className={styles.button}>{inputQuantity}</div>
    </form>
  );
}

export default CardButton;
