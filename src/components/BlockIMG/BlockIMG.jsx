import React from "react";
import style from "./BlockIMG.module.css";
import img from "../../img/NatureNew.svg";

function BlockIMG() {
  return (
    <div className={style.blockIMG}>
      <img src={img} alt="#" />
    </div>
  );
}

export default BlockIMG;
