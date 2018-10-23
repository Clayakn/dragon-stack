import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

// Redux
import { createStore } from 'redux';
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation';

// CSS 
import './index.css';


const store = createStore(generationReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log('store state update', store.getState()));

fetch('http://localhost:4001/generation')
    .then(response => response.json())
    .then(json => {
        store.dispatch(generationActionCreator(json.generation))
    })

render(
    <div>
        <h2>Dragon Stack from React</h2>
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
);