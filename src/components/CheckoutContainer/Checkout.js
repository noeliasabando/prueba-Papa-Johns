import React from 'react';
import { withRouter } from 'react-router-dom'
import styles from './checkout.module.scss';


const Checkout = (props) => {
  const { history } = props;
  const total = props.cartData.reduce((acc, product) => (acc + product.price), 0);
  return (
    <div className={styles.containerCheckout}>
      <div className={styles.titleCheckout}>Resumen de tu compra</div>
      {props.cartData[0] ?
        <React.Fragment>
          {props.cartData.map((data) => (
            <div className={styles.containerData}>
              <p className={styles.movieName}>Nombre película: {data.seriesName}</p>
              <p className={styles.price}>Precio: ${data.price}</p>
            </div>
          ))
          }
          <div className={styles.containerData}>
            <p>TOTAL</p>
            <p className={styles.price}>${total}</p>
          </div>
        </React.Fragment>
        :
        <p className={styles.emptyCart}>Aún no has comprado</p>
      }
      <div className={styles.containerData}>
        <p className={styles.buy} onClick={() => history.push('/')}>Seguir comprando</p>
        <p className={styles.pay}>Pagar</p>
      </div>
    </div>
  );
}

export default withRouter(Checkout);