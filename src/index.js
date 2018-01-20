import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import App from './components/App';
import './styles/main-styles.css';
import { store } from './store/store';

render(
    <HashRouter history={browserHistory}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
