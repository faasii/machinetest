import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux'

//wrapped with redux

ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>

    , document.getElementById('root')
);
