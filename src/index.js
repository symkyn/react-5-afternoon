import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import './index.css';
import store from './store';

ReactDOM.render(
<Provider store={store}>    
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();

