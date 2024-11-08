import React, { useEffect, useState } from "react";
import classes from "./Delivery.module.css";
import back1 from "../../../img/Back.svg";
import { useDispatch } from "react-redux";
import { addDelivery } from "../../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";

function Delivery({ back, register, addDataItemTime }) {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const newTime = formattedHours + ":" + formattedMinutes;

  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const [timeClass, setTimeClass] = useState(classes.inputTime);
  const [deliveryTime, setDeliveryTime] = useState(true);
  const [activePickup, setActivePickup] = useState(classes.checkboxNotActive);
  const [activeDelivery, setActiveDelivery] = useState(classes.checkboxActive);
  const [typeDelivery, setTypeDelivery] = useState("Время доставки:");
  const [selectedValue, setSelectedValue] = useState("Доставка");
  const [timeValue, setTimeValue] = useState(newTime);
  const [deliveryValue, setDeliveryValue] = useState("По готовности");
  const [noActive, setNoActive] = useState(false);

  useEffect(() => {
    if (hours >= 10 && hours <= 23) {
      setNoActive(false);
    } else {
      setNoActive(true);
    }
  }, [time]);

  const onSubmit = (data) => {
    dispatch(addDelivery(data));
    console.log(data);
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value); // Обновляем состояние при выборе радиокнопки
  };

  const timeOnClickActive = () => {
    setTimeClass(classes.inputTimeActive);
    setDeliveryValue("По готовности");
  };
  const timeOnClick = () => {
    setTimeClass(classes.inputTime);
  };

  const onClickDeliveryTime = () => {
    setDeliveryValue("По готовности/Доставить ко времени");
  };

  const onClickPickup = () => {
    setTypeDelivery("Время самовывоза:");
    setActiveDelivery(classes.checkboxNotActive);
    setActivePickup(classes.checkboxActive);
  };
  const onClickDelivery = () => {
    setTypeDelivery("Время доставки:");
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
        onClickDeliveryTime();
      }}
      className={classes.inputTimeAll}
      type="button"
      value="Доставить ко времени"
      name="deliveryTime"
    />
  ) : (
    <input
      type="time"
      value={timeValue}
      className={classes.inputTimeSlice}
      onChange={(e) => onChangeClick(e)}
    />
  );

  const onChangeClick = (e) => {
    setTimeValue(e.target.value);
    const time = e.target.value;
    addDataItemTime(time);
  };

  return (
    <div className={classes.formDelivery}>
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
              <h3>Выберите один из вариантов:</h3>
              <div className={classes.inputAdress}>
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
              <div>
                <input
                  id="myRadio_1"
                  type="radio"
                  name="address"
                  value="г. Химки, пр-т Юбилейный, 33, стр.1"
                  {...register("addressPoint")}
                  disabled={noActive}
                />
                <label
                  for="myRadio_1"
                  className={noActive === true ? classes.textColorLabel : ""}
                >
                  г. Химки, пр-т Юбилейный, 33, стр.1
                </label>
              </div>
            </div>
            <div className={classes.inputAdress}>
              <div className={activeDelivery}>
                <label for="address" className={classes.labelBlock}>
                  Доставить по адресу:
                </label>
                <label for="address">Улица:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="пр-т Мельникова"
                  {...register("address")}
                />
                <div className={classes.deliveryBlock}>
                  <div>
                    <div className={classes.inputBlock}>
                      <label for="dom">Дом:</label>
                      <input
                        type="text"
                        name="dom"
                        placeholder="1"
                        width="10px"
                        {...register("dom")}
                      />
                    </div>
                    <div className={classes.inputBlock}>
                      <label for="entrance">Подъезд:</label>
                      <input
                        type="text"
                        name="entrance"
                        placeholder="1"
                        width="10px"
                        {...register("entrance")}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={classes.inputBlock}>
                      <label for="itash">Этаж:</label>
                      <input
                        type="text"
                        name="itash"
                        placeholder="5"
                        {...register("itash")}
                      />
                    </div>
                    <div className={classes.inputBlock}>
                      <label for="kv">Квартира:</label>
                      <input
                        type="text"
                        name="kv"
                        placeholder="30"
                        {...register("kv")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label for="phone">Номер телефона: (+79991112233)</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+79991110000"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /\+7[0-9]{10}/,
                      message: "Введите в правильном формате +79991112233",
                    },
                  })}
                />
                {/* {errors.phone && <div>{errors.message}</div>} */}
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
            <h3 className={classes.TitleDelivery}>{typeDelivery}</h3>
            <input
              onClick={(e) => {
                timeOnClickActive();
                onClickTimeTrue();
                onChangeClick(e);
              }}
              className={timeClass}
              type="button"
              value={deliveryValue}
              name="readyTime"
              // {...register("deliveryTime")}
            />
            {timeDelivery}
            <p className={classes.infoDelivery}>
              Доставка от 1500 руб. БЕСПЛАТНО
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Delivery;
