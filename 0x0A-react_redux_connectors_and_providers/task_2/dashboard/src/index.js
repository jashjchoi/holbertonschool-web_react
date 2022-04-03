import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import thunk from 'redux-thunk'
import { uiReducer } from "./reducers/uiReducer";
import { creatStore, Provider, applyMiddleware} from "react-redux";

const store = creatStore(uiReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
