import React, { useState } from "react";
import styles from "./Modal.module.css";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

import zeroBasket from "../../img/BasketZero.png";
import ClearBlack from "../../img/ClearBlack.png";
import Delivery from "./Delivery/Delivery";

function Modal(props) {
  const basketItem = useSelector((state) => state.basket.items);
  const itemPrice = useSelector((state) => state.basket.totalPrice);
  const dataDelivery = useSelector((state) => state.basket.delivery);
  const [basket, setBasket] = useState(true);

  const zeroCart = (
    <div className={styles.basketZero}>
      <img src={zeroBasket} />
      <h3>Корзина пустая, как так?</h3>
    </div>
  );

  const onClickBack = () => {
    setBasket(true);
  };

  const dataItem = () => {
    console.log(basketItem);
    console.log(itemPrice);
    console.log(dataDelivery);
  };

  const DeliveryAndCart =
    basketItem.length > 0
      ? basketItem.map((meal) => (
          <CartItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            img={meal.img}
            amount={meal.amount}
          />
        ))
      : zeroCart;

  const basketDecor = basket ? (
    DeliveryAndCart
  ) : (
    <Delivery back={onClickBack} />
  );
  const buttonText =
    basket && basketItem.length > 0 ? (
      <button onClick={() => setBasket(false)}>К доставке</button>
    ) : (
      <button onClick={dataItem}>Заказать</button>
    );

  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>
          <h2>Корзина</h2>
          <img src={ClearBlack} onClick={props.close} />
        </div>
        <div className={styles.br}></div>
        <div className={styles.item}>{basketDecor}</div>
        <div className={styles.CartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{itemPrice} руб.</b>
            </li>
          </ul>
          {buttonText}
        </div>
      </div>
    </div>
  );
}

export default Modal;
