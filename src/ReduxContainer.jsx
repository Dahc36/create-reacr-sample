import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {configureStore} from './redux/configureStore';

import ReduxPrintNum from './ReduxPrintNum';
import ReduxChangeNum from './ReduxChangeNum';

let store = configureStore();

class ReduxContainer extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<h1>Redux</h1>
					<ReduxPrintNum/>
					<ReduxChangeNum/>
				</div>
			</Provider>
		);
	}
}

export default ReduxContainer;