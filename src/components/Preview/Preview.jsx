import React from "react";
import styles from "./Preview.module.css";

import left from "../../img/1.png";
import right from "../../img/2.png";

function Preview() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div>
            <img src={left} />
          </div>
          <div className={styles.info}>
            <h3>Спасибо, что вы с нами!</h3>
            <p>С вами мы становимся лучше!!!</p>
          </div>
          <div className={styles.img}>
            <img src={right} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
