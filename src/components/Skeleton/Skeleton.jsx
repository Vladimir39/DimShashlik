import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Skeleton.module.css";

const Skeleton = (props) => (
  <ContentLoader
    className={styles.contentLoader}
    speed={2}
    width={250}
    height={390}
    viewBox="0 0 250 400"
    backgroundColor="#891c21"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="60" rx="2" ry="2" width="230" height="170" />
    <circle cx="185" cy="228" r="36" />
    <rect x="10" y="270" rx="0" ry="0" width="150" height="20" />
    <rect x="205" y="320" rx="0" ry="0" width="25" height="15" />
    <rect x="10" y="305" rx="0" ry="0" width="180" height="55" />
    <rect x="16" y="370" rx="0" ry="0" width="190" height="25" />
  </ContentLoader>
);

export default Skeleton;
