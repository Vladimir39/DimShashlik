import React from "react";
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCatigoriesId } from "../../../redux/slices/filterSlice";

function Navigation(props) {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const onClickCategoryId = (id) => {
    dispatch(setCatigoriesId(id));
  };
  const navigation = props.navigation.map((item, index) => (
    <li
      key={item.id}
      className={Number(categoryId) === index ? styles.active : " "}
      onClick={() => onClickCategoryId(item.id)}
    >
      {item.name}
    </li>
  ));

  return (
    <div className={styles.navigastion}>
      <ul>{navigation}</ul>
    </div>
  );
}

export default Navigation;
