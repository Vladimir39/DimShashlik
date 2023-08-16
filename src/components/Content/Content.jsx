import React from "react";
import styles from "./Content.module.css";
import Navigation from "./Navigation/Navigation";
import ItemCard from "./Item/ItemCard";
import Skeleton from "../Skeleton/Skeleton";

function Content(props) {
  const itemCard = props.isLoading
    ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
    : props.item.map((meal) => (
        <ItemCard
          key={meal.id}
          id={meal.id}
          name={meal.name}
          img={meal.img}
          description={meal.description}
          price={meal.price}
        />
      ));

  return (
    <div className={styles.content}>
      <Navigation navigation={props.navigation} />
      <section className={styles.container}>{itemCard}</section>
    </div>
  );
}

export default Content;
