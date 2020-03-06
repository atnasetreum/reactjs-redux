import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

//const initialState = {
	//city: 'Londres',
	//categorias: []
//};

const initialState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveState(store.getState()));
//store.subscribe (throttle (() => saveState (store.getState()), 2000));
