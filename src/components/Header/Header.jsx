import React from "react";
import HeaderCardButton from "./HeaderButton";

import logo from "../../img/logoNew.png";
import telefon from "../../img/telefon.svg";

import styles from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={styles.header} onClick={props.close}>
        <div className={styles.container}>
          <div className={styles.nameCafe}>
            <div>
              <img src={logo} alt="Дым шашлык" />
            </div>
            <div className={styles.title}>
              <h1>ДЫМ ШАШЛЫК</h1>
              <p>Любовь с первого шампура</p>
            </div>
          </div>
          <div className={styles["adress-Telefon"]}>
            <div>
              <img src={telefon} alt="Телефон" />
            </div>
            <div className={styles.mainAdress}>
              <div className={styles.adress}>
                <div>
                  <h2>+79659898988</h2>
                </div>
                <div>
                  <p>г. Химки, пр-т Юбилейный, 51, к.1</p>
                </div>
              </div>
              <div className={styles.adress}>
                <div>
                  <h2>+79619797977</h2>
                </div>
                <div>
                  <p>г. Химки, пр-т Мельникова, 2Б, стр.1</p>
                </div>
              </div>
            </div>
          </div>
          <HeaderCardButton onClick={props.open} />
        </div>
      </header>
    </>
  );
}

export default Header;
