import React from "react";
import ContentLoader from "react-content-loader";
import styles from './Skeleton.module.css'

const Skeleton = (props) => (
  <ContentLoader
  className={styles.contentLoader}
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#891c21"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="110" cy="142" r="107" />
    <circle cx="185" cy="228" r="36" />
    <rect x="11" y="278" rx="0" ry="0" width="208" height="30" />
    <rect x="39" y="319" rx="0" ry="0" width="151" height="21" />
    <rect x="16" y="357" rx="0" ry="0" width="200" height="42" />
  </ContentLoader>
);

export default Skeleton;
