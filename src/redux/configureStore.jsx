import * as redux from 'redux';

import {numReducer} from './reducers';

export let configureStore = (initialState = {}) => {
	let reducer = redux.combineReducers({
		num: numReducer
	});

	let store = redux.createStore(reducer, redux.compose());

	return store;
};