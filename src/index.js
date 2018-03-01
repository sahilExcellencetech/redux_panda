import ReactDOM from 'react-dom';
import React from 'react';
import style from 'antd/dist/antd.css';
import styles from './index.css';
import {store} from './store/store';
import {Provider} from 'react-redux';
import styl from './HomePage.css';
import routes from './App';

const jsx=(
    <Provider store={store}>
        {routes}
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
