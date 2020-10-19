import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import counterreducer from "./Store/CounterReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    counter:counterreducer,
    
    
})
const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));
const app=(
    <Provider store={store}>
    <App/>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
