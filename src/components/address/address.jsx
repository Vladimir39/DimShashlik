import React from "react";
import styles from "./address.module.css";
import telefon from "../../img/telefonV2.svg";

function Address() {
  return (
    <main className={styles.mainAddress}>
      <div className={styles.container}>
        <div>
          <img src={telefon} alt="Телефон" />
        </div>
        <div className={styles.addressBlock}>
          <div className={styles.address}>
            <div>
              <h2>+79619797977</h2>
            </div>
            <div>
              <p>г. Химки, пр-т Мельникова, 2Б, стр.1</p>
            </div>
          </div>
          <div className={styles.address}>
            <div>
              <h2>+79659898988</h2>
            </div>
            <div>
              <p>г. Химки, пр-т Юбилейный, 33, стр.1</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Address;
