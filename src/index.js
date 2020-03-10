import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import ProductsPage from './components/ProductsPage/ProductsPage';
import CheckoutContainer from './components/CheckoutContainer';


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
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ProductsPage} />
          <Route exact path='/checkout' component={CheckoutContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
