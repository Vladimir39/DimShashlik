import React from "react";
import styles from "./Footer.module.css";

import vk from "../../img/vk.png";
import inst from "../../img/instagram.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.blockInfo}>
        <div className={styles.blockSocialMedia}>
          <a href="https://instagram.com/dim_shashlik_ximki">
            <div className={styles.blockImg}>
              <img src={inst} />
            </div>
            <div>
              <p>dim_shashlik_ximki</p>
            </div>
          </a>
        </div>
        <div>
          <a href="https://vk.com/public211432689">
            <div className={styles.blockImg}>
              <img src={vk} />
            </div>
            <div>
              <p>public211432689</p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.blockInfo}>
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
  );
}

export default Footer;
