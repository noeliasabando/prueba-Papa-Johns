import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';


const Search = ({ upDate }) => {
  const [value, setValue] = useState('');
  const handleyKeyPress = (event) => {
    if (event.key === "Enter") {
      upDate(value)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Ingresa película'
          onKeyPress={handleyKeyPress}
        />
        <button
          className={styles.btn}
          onClick={() => upDate(value)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default Search;