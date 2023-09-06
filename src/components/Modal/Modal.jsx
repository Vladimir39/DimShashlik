import React, { useRef, useState } from "react";
import styles from "./Modal.module.css";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import { useForm } from "react-hook-form";

import zeroBasket from "../../img/BasketZero.png";
import ClearTop from "../../img/ClearTop.svg";
import Delivery from "./Delivery/Delivery";

function Modal(props) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const basketItem = useSelector((state) => state.basket.items);
  const itemPrice = useSelector((state) => state.basket.totalPrice);
  const [basket, setBasket] = useState(true);
  const [time, setTime] = useState("");

  const addTimeHandler = (time) => {
    setTime(time);
  };

  const onSubmit = (data) => {
    // Ваша обработка данных формы в родительском компоненте
    console.log("Данные из родительского компонента:", data);

    order = {
      price: itemPrice,
      delivery: {
        addressPoint: data.addressPoint,
        address: data.address,
        phone: data.phone,
        addition: data.addition,
        time: time,
      },
      basketItem,
    };
    console.log(order);
    dispatch(fetchOrder(order));
  };

  const handleChildFormSubmit = () => {
    // Вызов handleSubmit из родительского компонента
    handleSubmit(onSubmit)();
  };

  let order = {
    price: "",
    delivery: {
      addressPoint: "",
      address: "",
      phone: "",
      addition: "",
      time: "",
    },
    basketItem,
  };

  const zeroCart = (
    <div className={styles.basketZero}>
      <img src={zeroBasket} />
      <h3>Корзина пустая, как так?</h3>
    </div>
  );

  const onClickBack = () => {
    setBasket(true);
  };

  // const dataItem = (time) => {
  //   console.log(time);
  //   order = {
  //     price: itemPrice,
  //     delivery: {
  //       addressPoint: dataDelivery.addressPoint,
  //       address: dataDelivery.address,
  //       phone: dataDelivery.phone,
  //       addition: dataDelivery.addition,
  //       time: time,
  //     },
  //     basketItem,
  //   };
  //   console.log(order);
  //   dispatch(fetchOrder(order));
  // };

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
    <Delivery
      back={onClickBack}
      register={register}
      addDataItemTime={addTimeHandler}
    />
  );

  const buttonText =
    basket && basketItem.length > 0 ? (
      <button onClick={() => setBasket(false)}>К доставке</button>
    ) : (
      <button
        onClick={() => {
          // dataItem();
          handleChildFormSubmit();
        }}
      >
        Заказать
      </button>
    );
  const notActiveButton =
    basketItem.length > 0 ? buttonText : <button>Брат, закажи блюдо!</button>;

  return (
    <div className={styles.overlay} onClick={props.close}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>
          <h2>Корзина</h2>
          <img src={ClearTop} onClick={props.close} />
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
          {notActiveButton}
        </div>
      </div>
    </div>
  );
}

export default Modal;
