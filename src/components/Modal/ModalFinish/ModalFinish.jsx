import React from "react";
import styles from "./ModalFinish.module.css";
import ClearTop from "../../../img/ClearTop.svg";
import logo from "../../../img/LOGO.jpg";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ModalFinish(props) {
  const orderPost = useSelector((state) => state.order.posts.items);
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
            <h2>БЛАГОДАРИМ ЗА ЗАКАЗ!</h2>
            <p>С вами свяжутся в ближайшее время</p>
            <p>
              Номер вашего заказа:{" "}
              <span className={styles.span}>{orderPost}</span>
            </p>
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
