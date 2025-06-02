"use client"
import React, { useState } from 'react';
import styles from "../../style/layout/WhatsappIcon.module.css"

const WhatsappIcon = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleNumberClick = (number) => {
    window.open(`https://wa.me/${number}`,);
  };

  return (
    <div>
      <div className={styles.floatingIcon} onClick={handleIconClick}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" />
      </div>
      <div className={`${styles.popup} ${isPopupOpen ? styles.open : ''}`}>
        <div className={styles.popupContent}>
          <div className={styles.phoneNumber} onClick={() => handleNumberClick('+971  ')}>
          Dubai
          </div>
          <div className={styles.phoneNumber} onClick={() => handleNumberClick('+919717032021')}>
          India
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappIcon;
