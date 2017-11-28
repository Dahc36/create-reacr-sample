import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './redux/actions'

class ChangeNum extends Component{
	render() {
		let {dispatch} = this.props;
		return (
			<div className="change-num">
				<button onClick={() => {dispatch(actions.subNum());}}>- 1</button>
				<button onClick={() => {dispatch(actions.addNum());}}>+ 1</button>
			</div>
		);
	}
}

export default connect()(ChangeNum);