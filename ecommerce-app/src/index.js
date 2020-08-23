import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const store = createStore(rootReducer,applyMiddleware(thunk));
console.log('state',store.getState());

ReactDOM.render(
 <Provider store = {store}>
  <App />
 </Provider>,
  document.getElementById('root')
);


