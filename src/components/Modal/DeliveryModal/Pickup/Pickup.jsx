import { useState } from "react";
import styles from "./Pickup.module.css";

const Pickup = ({ onValueChange }) => {
  const [active, setActive] = useState("");

  const handleClick = (pointId) => {
    onValueChange(pointId);
    setActive(pointId);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.pickupBlock} ${
          active === "point1" ? styles.active : ""
        }`}
        onClick={() => handleClick("г. Химки, пр-т Юбилейный, 33, стр.1")}
      >
        <input
          id="point1"
          type="radio"
          value="г. Химки, пр-т Юбилейный, 33, стр.1"
          className={styles.radioInput}
        />
        <label htmlFor="point1" className={styles.radioLabel}>
          г. Химки, пр-т Юбилейный, 33, стр.1
        </label>
      </div>
      <div
        className={`${styles.pickupBlock} ${
          active === "point2" ? styles.active : ""
        }`}
        onClick={() => handleClick("г. Химки, пр-т Мельникова, 2Б, стр.1")}
      >
        <input
          id="point2"
          type="radio"
          value="г. Химки, пр-т Мельникова, 2Б, стр.1"
          className={styles.radioInput}
        />
        <label htmlFor="point2" className={styles.radioLabel}>
          г. Химки, пр-т Мельникова, 2Б, стр.1
        </label>
      </div>
    </div>
  );
};

export default Pickup;
