import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { generationReducer } from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// CSS 
import './index.css';


const store = createStore(
    generationReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);



render(
    <Provider store={store}>
    <div>
        <h2>Dragon Stack from React</h2>
        <Generation />
        <Dragon />
    </div>
    </Provider>,
    document.getElementById('root')
);