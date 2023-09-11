import React from "react";
import styles from "./ModalFinish.module.css";
import ClearTop from "../../../img/ClearTop.svg";
import logo from "../../../img/LOGO.jpg";

function ModalFinish(props) {
  return (
    <div
      className={styles.modalFinish}
      onClick={() => {
        props.closeFinish();
        props.baskentActive();
      }}
    >
      <div className={styles.drawerFinish} onClick={(e) => e.stopPropagation()}>
        <div className={styles.blockFinish}>
          <div className={styles.infoTitle}>
            <h2>СПАСИБО ЗА ПОКУПКУ</h2>
          </div>
          <div className={styles.infoClose}>
            <img src={ClearTop} onClick={props.closeFinish} />
          </div>
        </div>
        <div className={styles.blockImg}>
          <img
            src={logo}
            className={styles.drawerImg}
            onClick={props.baskentActive}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalFinish;
