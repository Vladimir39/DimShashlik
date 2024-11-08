import React from "react";
import styles from "./Preview.module.css";

import prew from "./prew/1111.svg";
function Preview() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div className={styles.imgDiv}>
            <img src={prew} className={styles.img} />
          </div>
          <div className={styles.title}>
            <h3>НАМ 2 ГОДА!</h3>
            <h3>
              <span>-10 %</span> НА ВСЕ МЕНЮ!
            </h3>
            <p>Акция действительна 26.02.24</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
