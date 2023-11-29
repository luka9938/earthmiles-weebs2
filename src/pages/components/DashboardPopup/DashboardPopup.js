import React from "react";
import styles from "./DashboardPopup.module.css";

const PopUp = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.big_element} onClick={onRequestClose}>
      <div>{children}</div>
    </div>
  );
};

export default PopUp;
