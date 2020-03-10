import React from 'react';
import { useSelector } from 'react-redux'
import Checkout from './Checkout';
import styles from './checkout.module.scss';

const CheckoutContainer = () => {
  const cartData = useSelector(state => {
    return state.checkout.cart
  });
  return (
    <div className={styles.container}>
      <Checkout cartData={cartData} />
    </div>
  );
}

export default CheckoutContainer;