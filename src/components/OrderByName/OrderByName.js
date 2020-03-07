import React from 'react';
import styles from './OrderByName.module.scss';


const OrderByName = ({setOrder}) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setOrder('asc')}>Ordenar A-Z</button>
      <button className={styles.btn} onClick={() => setOrder('desc')}>Ordenar Z-A</button>
    </div>
  )
}

export default OrderByName;