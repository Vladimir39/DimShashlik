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
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <CardButton date={props} />
    </div>
  );
}

export default ItemCard;
