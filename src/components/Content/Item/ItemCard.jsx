import React from "react";
import styles from "./ItemCard.module.css";
import CardButton from "./CardButton";

function ItemCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgPrice}>
        <img src={props.img} />
        <div className={styles.price}>
          <h1>{props.price}</h1>
        </div>
      </div>
      <div className={styles.title}>
        <h3 className={styles.h3}>{props.name}</h3>
        <div className={styles.description}>
          <div className={styles.descriptionP}>
            <p className={styles.p}>{props.description}</p>
          </div>
          <div className={styles.descriptionSpan}>
            <span>{props.weight}</span>
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <CardButton date={props} />
      </div>
    </div>
  );
}

export default ItemCard;
