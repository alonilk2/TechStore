import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './Views/HomePage';
import store from './store';
import {history} from './history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/404" />
        </Switch>
      </Router>    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
