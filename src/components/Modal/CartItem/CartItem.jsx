import React from "react";
import clear from "../../../img/clear.svg";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  setBasketItemPlus,
  setBasketItemMinus,
  removeItems,
} from "../../../redux/slices/basketSlice";

function CartItem({ id, name, price, img, amount }) {
  const dispatch = useDispatch();

  const addCountPlus = () => {
    dispatch(setBasketItemPlus(id));
  };
  const addCountMinus = () => {
    if (amount <= 1) {
      dispatch(removeItems(id));
    } else {
      dispatch(setBasketItemMinus(id));
    }
  };
  const deleteItem = () => {
    dispatch(removeItems(id));
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.content}>
        <div className={styles.itemImg}>
          <img src={img} />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h2>{name}</h2>
          </div>
          <div className={styles.itemPrice}>
            <div className={styles.price}>
              <p>{price * amount} руб.</p>
            </div>
            <div className={styles.input}>
              <div className={styles.quantityButton} onClick={addCountMinus}>
                <p>-</p>
              </div>
              <div>
                <p className={styles.newInput}>{amount}</p>
              </div>
              <div className={styles.quantityButton} onClick={addCountPlus}>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemClear}>
        <img className={styles.clear} src={clear} onClick={deleteItem} />
      </div>
    </div>
  );
}

export default CartItem;
