import ReactDOM from 'react-dom';
import style from 'antd/dist/antd.css';
import styles from './index.css';
import styl from './HomePage.css';
import routes from './App';
import {store} from './redux/userDetailReducer';

ReactDOM.render(routes, document.getElementById('root'));
