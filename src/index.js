import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StateProvider} from './state/StateProvider'
import App from './App';
import reducer, { initialState } from './state/reducer';
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
