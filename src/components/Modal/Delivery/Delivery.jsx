import React, { useState } from "react";
import classes from "./Delivery.module.css";
import back from "../../../img/Arrow_v3.png";
import { useDispatch, useSelector } from "react-redux";
import { addDelivery } from "../../../redux/slices/basketSlice";
import { setTimesDelivery } from "../../../redux/slices/timesDelivery";
import { useForm } from "react-hook-form";

function Delivery(props) {
  const dispatch = useDispatch();
  const timeSlice = useSelector((state) => state.timesDelivery.times);
  const { register, handleSubmit } = useForm();
  const [timeClass, getTimeClass] = useState(classes.buttonTimes);
  const timeOnClick = () => {
    getTimeClass(classes.active);
  };

  const onSubmit = (data) => {
    dispatch(addDelivery(data));
  };
  const DELIVERY_TIME = [];

  const nameTime = (index) => {
    dispatch(setTimesDelivery(index));
  };

  const time = new Date();
  console.log(time);

  for (let i = 0; i < 24; i++) {
    if (i <= 9) {
      DELIVERY_TIME.push(`0${i}:00`);
      DELIVERY_TIME.push(`0${i}:30`);
    } else {
      DELIVERY_TIME.push(`${i}:00`);
      DELIVERY_TIME.push(`${i}:30`);
    }
  }
  const times = DELIVERY_TIME.map((time, index) => (
    <button
      key={index}
      onClick={() => nameTime(index)}
      className={
        Number(timeSlice) === index ? classes.active : classes.buttonTimes
      }
    >
      {time}
    </button>
  ));
  return (
    <div>
      <div onClick={props.back} className={classes.back}>
        <img src={back} alt="#" />
        <p>Назад</p>
      </div>
      <h2>Доставка</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.checkboxAdress}>
            <h3>При самовывозе в поле адрес укажите один из вариантов:</h3>
            <div className={classes.checkbox}>
              <div>
                <input
                  type="radio"
                  name="address"
                  value="г. Химки, пр-т Юбилейный, 51, к.1"
                  {...register("addressPoint")}
                />
                <label>г. Химки, пр-т Юбилейный, 51, к.1</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="address"
                  value="г. Химки, пр-т Мельникова, 2Б, стр.1"
                  {...register("addressPoint")}
                />
                <label>г. Химки, пр-т Мельникова, 2Б, стр.1</label>
              </div>
            </div>
            <div className={classes.inputAdress}>
              <div>
                <label for="address">Доставить по адресу:</label>
                <input
                  type="text"
                  name="address"
                  required
                  {...register("address")}
                />
              </div>
              <div>
                <label for="phone">Телефон (через +7 без пробелов):</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  {...register("phone")}
                />
              </div>
            </div>
          </div>
          <h3 className={classes.TitleDelivery}>К какому времени привезти:</h3>
          <button onClick={timeOnClick} className={timeClass} type="submit">
            По готовности
          </button>
          <div className={classes.times}>{times}</div>
        </form>
      </div>
    </div>
  );
}

export default Delivery;
