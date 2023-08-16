import React from "react";
import styles from "./address.module.css";
import telefon from "../../img/telefon.svg";

function Address() {
  return (
    <div className={styles.mainAddress}>
      <div className={styles.container}>
        <div>
          <img src={telefon} alt="Телефон" />
        </div>
        <div>
          <div className={styles.address}>
            <div>
              <h2>+79659898988</h2>
            </div>
            <div>
              <p>г. Химки, пр-т Юбилейный, 51, к.1</p>
            </div>
          </div>
          <div className={styles.address}>
            <div>
              <h2>+79619797977</h2>
            </div>
            <div>
              <p>г. Химки, пр-т Мельникова, 2Б, стр.1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
