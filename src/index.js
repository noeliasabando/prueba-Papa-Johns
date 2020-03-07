import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import ProductsPage from './components/ProductsPage/ProductsPage';


const App = () => {
  useEffect(() => {
    let logIn = async () => {
      axios.post('https://cors-anywhere.herokuapp.com/https://api.thetvdb.com/login', {
        apikey: "8daa9f5b8692e2807bd8a318e3e8a8b7",
        userkey: "5E6304EB325AF5.09357436",
        username: "noelia"
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
          console.log(error, 'e');
        })
    }
    logIn();
  }, []);
  
  return (
    <BrowserRouter>
      <Route path='/' component={ProductsPage} />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
