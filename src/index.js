import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import {Grid} from "./Grid";
import {GlobalStyles} from './GlobalStyles';
import {createStore} from "redux";

import {Provider}from 'react-redux';

import rootReducer from "./redux/reducers";
import {ThemeElement} from "./Theme";
const store = createStore(rootReducer)


document.title = 'Admin Dashboard';
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyles/>
            <ThemeElement/>
            <Grid/>
            <Layout />
        </React.StrictMode>
    </Provider>
  ,
  document.getElementById('root')
);

