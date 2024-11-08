import React from "react";
import styles from "./Footer.module.css";

import vk from "../../img/VK.svg";
import inst from "../../img/INST.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.blockInfo}>
        <div className={styles.blockSocialMedia}>
          <div className={styles.addressNet}>
            <a href="https://instagram.com/dim_shashlik_ximki">
              <div className={styles.blockImg}>
                <img src={inst} />
              </div>
            </a>
            <a href="https://vk.com/dim_shashlik_ximki">
              <div className={styles.blockImg}>
                <img src={vk} />
              </div>
            </a>
          </div>
          <div className={styles.nameNet}>
            <p>dim_shashlik_ximki</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.blockInfoTwo}>
        <div className={styles.address}>
          <div>
            <h2>+79659898988</h2>
          </div>
          <div>
            <p>г. Химки, пр-т Юбилейный, 33, стр.1</p>
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
      <div className={styles.addressINN}>
        <p className={styles.PaddressINN}>&copy; 2024 “Дым шашлык”</p>
        <p className={styles.PaddressINN}>
          Копляков Сергей Михайлович ИНН 391803344140{" "}
        </p>
        <p className={styles.PaddressINN}>
          г. Химки, пр-т Мельникова, 2Б, стр.1
        </p>
      </div>
    </footer>
  );
}

export default Footer;
