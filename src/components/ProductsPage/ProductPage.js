import React, { useState } from 'react';
import styles from './ProductPage.module.scss';


const ProductPage = ({ photo, title, year, description, author, price, addToCart }) => {
  const [show, setShow] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    setAddedToCart(true);
    addToCart()
  }


  return (
    <div className={styles.containerBook}>
      <img className={styles.img} src={`http://thetvdb.com${photo}`} alt="movie" />
      <p className={styles.title}>{title}</p>
      {description &&
        <p className={styles.show} onClick={() => setShow(!show)}>Ver descripción...</p>
      }
      {show &&
        <p>{description}</p>
      }
      {author &&
        <p className={styles.author}>Transmitida por {author}</p>
      }
      {year &&
        <p className={styles.year}>Estrenada el {year}</p>
      }
      <p className={styles.price}>${price}</p>
      {addedToCart ?
        <button className={styles.added}>Añadido al carrito</button>
        :
        <button className={styles.buy} onClick={handleClick} >Comprar</button>
      }
    </div>
  );
}

export default ProductPage;