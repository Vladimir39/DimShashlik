import React, { useState } from "react";
import classes from "./Delivery.module.css";
import back1 from "../../../img/Back.svg";
import { useDispatch } from "react-redux";
import { addDelivery } from "../../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";

function Delivery({ back, register, addDataItemTime }) {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const [timeClass, setTimeClass] = useState(classes.inputTime);
  const [deliveryTime, setDeliveryTime] = useState(true);
  const [activePickup, setActivePickup] = useState(classes.checkboxNotActive);
  const [activeDelivery, setActiveDelivery] = useState(classes.checkboxActive);
  const [selectedValue, setSelectedValue] = useState("Доставка");

  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  console.log(formattedHours);
  console.log(formattedMinutes);

  const onSubmit = (data) => {
    // Обработка данных формы
    dispatch(addDelivery(data));
    console.log(data);
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value); // Обновляем состояние при выборе радиокнопки
  };

  const timeOnClickActive = () => {
    setTimeClass(classes.inputTimeActive);
  };
  const timeOnClick = () => {
    setTimeClass(classes.inputTime);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  //   dispatch(addDelivery(data));
  // };

  const onClickPickup = () => {
    setActiveDelivery(classes.checkboxNotActive);
    setActivePickup(classes.checkboxActive);
  };
  const onClickDelivery = () => {
    setActivePickup(classes.checkboxNotActive);
    setActiveDelivery(classes.checkboxActive);
  };

  const onClickTimeTrue = () => {
    setDeliveryTime(true);
  };
  const onClickTimeFalse = () => {
    setDeliveryTime(false);
  };

  const timeDelivery = deliveryTime ? (
    <input
      onClick={() => {
        onClickTimeFalse();
        timeOnClick();
      }}
      className={classes.inputTimeAll}
      type="button"
      value="Доставить ко времени"
      name="deliveryTime"
    />
  ) : (
    <input
      type="time"
      value={`${formattedHours}:${formattedMinutes}`}
      className={classes.inputTimeSlice}
      onChange={(e) => onChangeClick(e)}
    />
  );

  const onChangeClick = (e) => {
    const time = e.target.value;
    console.log(time);
    addDataItemTime(time);
  };

  return (
    <div>
      <div onClick={back} className={classes.back}>
        <img src={back1} alt="#" />
        <p>Назад</p>
      </div>
      <h2>Доставка</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.checkboxAdress}>
            <div className={classes.choiceDelivery}>
              <div>
                <input
                  id="myRadio_4"
                  type="radio"
                  name="delivery"
                  value="Доставка"
                  checked={selectedValue === "Доставка"}
                  onChange={handleRadioChange}
                  onClick={onClickDelivery}
                />
                <label htmlFor="myRadio_4">Доставка</label>
              </div>
              <div className={classes.deliv}>
                <input
                  id="myRadio_3"
                  type="radio"
                  name="delivery"
                  value="Самовывоз"
                  checked={selectedValue === "Самовывоз"}
                  onChange={handleRadioChange}
                  onClick={onClickPickup}
                />
                <label htmlFor="myRadio_3">Самовывоз</label>
              </div>
            </div>

            <div className={(classes.checkbox, activePickup)}>
              <h3>Выбирите один из вариантов:</h3>
              <div>
                <input
                  id="myRadio_1"
                  type="radio"
                  name="address"
                  value="г. Химки, пр-т Юбилейный, 51, к.1"
                  {...register("addressPoint")}
                />
                <label for="myRadio_1">г. Химки, пр-т Юбилейный, 51, к.1</label>
              </div>
              <div>
                <input
                  id="myRadio_2"
                  type="radio"
                  name="address"
                  value="г. Химки, пр-т Мельникова, 2Б, стр.1"
                  {...register("addressPoint")}
                />
                <label for="myRadio_2">
                  г. Химки, пр-т Мельникова, 2Б, стр.1
                </label>
              </div>
            </div>
            <div className={classes.inputAdress}>
              <div className={activeDelivery}>
                <label for="address">Доставить по адресу:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="пр-т Мельникова, 2Б, стр.1"
                  {...register("address")}
                />
              </div>
              <div>
                <label for="phone">Телефон (через +7 без пробелов):</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+79991110000"
                  pattern="\+7[0-9]{10}"
                  required
                  {...register("phone")}
                />
              </div>
              <div>
                <label for="addition">Комментарий к заказу:</label>
                <input
                  type="text"
                  name="Addition"
                  placeholder="Домофон не работает. код от домофона: 1111"
                  {...register("addition")}
                />
              </div>
            </div>
            <h3 className={classes.TitleDelivery}>Время доставки:</h3>
            <input
              onClick={(e) => {
                timeOnClickActive();
                onClickTimeTrue();
                onChangeClick(e);
              }}
              className={timeClass}
              type="button"
              value="По готовности"
              name="readyTime"
              // {...register("deliveryTime")}
            />
            {timeDelivery}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Delivery;
