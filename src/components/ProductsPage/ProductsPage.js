import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { ADD_TO_CART } from '../../store/constants';
import ProductPage from './ProductPage';
import Search from '../Search/Search';
import OrderByName from '../OrderByName/OrderByName';
import styles from './ProductPage.module.scss';


const ProductsPage = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('avengers');

  const { history } = props;
  const dispatch = useDispatch();

  const addToCart = useCallback(
    (product) => {
      dispatch({ type: ADD_TO_CART, payload: product })
    },
    [dispatch]
  )

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.thetvdb.com/search/series?name=${query}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => {
        const data = response.data.data.map((product) => {
          const price = Math.floor(Math.random() * 1000);
          return { ...product, price }
        })
        setData(data)
        setError(false)
      })
      .catch((error) => {
        setError(error.response.data.Error)
      })
  }, [query])

  const orderByName = (data, order) => {
    return data.sort((a, b) => {
      if (a.seriesName.trim() < b.seriesName.trim()) {
        return (order === 'asc') ? -1 : 1;
      }
      if (a.seriesName.trim() > b.seriesName.trim()) {
        return (order === 'asc') ? 1 : -1;
      }
      return 0
    });
  };
  console.log(addToCart)
  return (
    <React.Fragment>
      <div className={styles.nav}>
        <div className={styles.titlePage}> MovieLand</div>
        <p className={styles.checkout} onClick={() => history.push('/checkout')} >Ver carro de compras</p>
      </div>
      <Search
        upDate={setQuery}
      />
      {!error && data[0] &&
        <OrderByName
          setOrder={(order) => {
            const newData = [...orderByName(data, order)]
            setData(newData);
          }}
        />
      }
      {error === 'Resource not found' && <p className={styles.noResults}>No se encuentran resultados</p>}
      {!error &&
        <div className={styles.container}>
          {data && data.map((product) => (
            <ProductPage
              key={product.id}
              photo={product.image}
              title={product.seriesName}
              description={product.overview}
              year={product.firstAired}
              author={product.network}
              price={product.price}

              addToCart={() => addToCart(product)}
            />
          ))
          }
        </div>
      }
    </React.Fragment>
  )
};
export default withRouter(ProductsPage);
