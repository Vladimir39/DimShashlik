import React, { useState } from "react";
import styles from "./Modal.module.css";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../redux/slices/orderSlice";
import { remove } from "../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";

import zeroBasket from "../../img/BasketZero.png";
import ClearTop from "../../img/ClearTop.svg";
import Delivery from "./Delivery/Delivery";
import ModalFinish from "./ModalFinish/ModalFinish";

function XXX({
  orderDeliveryPhone,
  onClickBasketValue,
  onClickBasketNoActive,
  onClickClearBasket,
}) {
  React.useEffect(() => {
    if (orderDeliveryPhone !== "") {
      onClickBasketValue();
      onClickBasketNoActive();
      onClickClearBasket();
    }
  }, [orderDeliveryPhone]);

  return null; // Возвращаем null, так как это компонент-обертка для эффекта
}

function Modal(props) {
  const { handleSubmit, register } = useForm({
    mode: "onBlur",
    defaultValues: {
      address: "",
      dom: "",
      itash: "",
      kv: "",
      phone: "+7",
    },
  });
  const dispatch = useDispatch();
  const basketItem = useSelector((state) => state.basket.items);
  const itemPrice = useSelector((state) => state.basket.totalPrice);
  const [basket, setBasket] = useState(true);
  const [time, setTime] = useState("");
  const [basketValue, setBasketValue] = useState(false);
  const [styleBasket, setStyleBasket] = useState(styles.overlay);
  const [orderDeliveryPhone, setOrderDeliveryPhone] = useState("");

  const addTimeHandler = (time) => {
    setTime(time);
  };

  const onSubmit = async (data) => {
    // Ваша обработка данных формы в родительском компоненте

    const newOrder = {
      price: itemPrice,
      delivery: {
        addressPoint: data.addressPoint,
        address: data.address,
        dom: data.dom,
        entrance: data.entrance,
        itash: data.itash,
        kv: data.kv,
        phone: data.phone,
        addition: data.addition,
        time: time,
      },
      basketItem,
    };
    dispatch(fetchOrder(newOrder));
    await new Promise((resolve) => setTimeout(resolve, 100)); // Ждем некоторое время (может потребоваться настраивать)
    setOrderDeliveryPhone(newOrder.delivery.phone);
  };

  const handleChildFormSubmit = async () => {
    // Вызов handleSubmit из родительского компонента
    await handleSubmit(onSubmit)();
  };

  // Закрытие модального окна через 10 секунд
  React.useEffect(() => {
    if (basketValue) {
      const timer = setTimeout(() => {
        props.close(); // Вызов функции для закрытия модального окна
      }, 10000); // 10 секунд в миллисекундах
      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }
  }, [basketValue, props]);

  const zeroCart = (
    <div className={styles.basketZero}>
      <img src={zeroBasket} />
      <h3>Корзина пустая, как так?</h3>
    </div>
  );

  const onClickBack = () => {
    setBasket(true);
  };

  const onClickBasketValue = () => {
    setBasketValue(true);
  };

  const onClickBasketNoActive = () => {
    setStyleBasket(styles.overlayNoActive);
  };
  const onClickBasketActive = () => {
    setStyleBasket(styles.overlay);
  };

  const onClickClearBasket = () => {
    dispatch(remove());
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
        onClick={async () => {
          await handleChildFormSubmit();
        }}
      >
        Заказать
      </button>
    );
  const notActiveButton =
    basketItem.length > 0 ? (
      buttonText
    ) : (
      <button onClick={props.close}>Добавьте блюдо в корзину!</button>
    );

  return (
    <>
      <div className={styleBasket} onClick={props.close}>
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
      {basketValue && (
        <ModalFinish
          closeFinish={props.close}
          baskentActive={onClickBasketActive}
        />
      )}
      <XXX
        orderDeliveryPhone={orderDeliveryPhone}
        onClickBasketValue={onClickBasketValue}
        onClickBasketNoActive={onClickBasketNoActive}
        onClickClearBasket={onClickClearBasket}
      />
    </>
  );
}

export default Modal;
