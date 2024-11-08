import React from "react";
import styles from "./ItemCard.module.css";
import CardButton from "./CardButton";

function ItemCard(props) {
  const [isDisabled, setIsDisabled] = React.useState(false);

  const time = new Date();
  const hours = time.getHours();

  React.useEffect(() => {
    if (hours >= 10 && hours < 23) {
      setIsDisabled(false);
    } else {
      if (props.categoryName === "САЛАТ" || props.categoryName === "МУЧНОЕ") {
        setIsDisabled(true);
      }
    }
  }, [time]);

  return (
    <div className={styles.container}>
      <div className={styles.imgPrice}>
        <img src={props.img} alt="Блюдо" />
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
        <CardButton date={props} isDisabled={isDisabled} />
      </div>
    </div>
  );
}

export default ItemCard;
