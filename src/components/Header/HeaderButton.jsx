import React from "react";
import CartIcon from "../Icon/CartIcon";
import { useSelector } from "react-redux";

import styles from "./HeaderButton.module.css";

function HeaderCardButton(props) {
  const amount = useSelector((state) => state.basket.totalAmount);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.spanAdaptiv}>Корзина</span>
      <span className={styles.badge}>{amount}</span>
    </button>
  );
}

export default HeaderCardButton;
