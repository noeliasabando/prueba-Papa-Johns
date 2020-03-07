import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductPage from './ProductPage';
import Search from '../Search/Search';
import OrderByName from '../OrderByName/OrderByName';
import styles from './ProductPage.module.scss';


const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('avengers');

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.thetvdb.com/search/series?name=${query}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => {
        setData(response.data.data)
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

  return (
    <React.Fragment>
      <div className={styles.nav}>MovieLand</div>
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
          {data && data.map((data) => (
            <ProductPage
              key={data.id}
              photo={data.image}
              title={data.seriesName}
              description={data.overview}
              year={data.firstAired}
              author={data.network}
            />
          ))
          }
        </div>
      }
    </React.Fragment>
  )
}

export default ProductsPage;
