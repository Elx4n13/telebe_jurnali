import React from "react";
import styles from "./Empty.module.scss";
const Empty = () => {
  return (
    <div className={styles.emptyContainer}>
      <h1>Telebe siyahisi boshdur...</h1>
      <h2>Telebe elave etmek ucun buttona click edin</h2>
    </div>
  );
};

export default Empty;
