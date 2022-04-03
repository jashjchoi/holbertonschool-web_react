import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import thunk from 'redux-thunk'
import { uiReducer } from "./reducers/uiReducer";
import { creatStore, Provider, applyMiddleware} from "react-redux";
import rootReducer, { initialState } from './reducers/rootReducer';

const store = creatStore(uiReducer, applyMiddleware(thunk))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
