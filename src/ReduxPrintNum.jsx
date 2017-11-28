import React, {Component} from 'react';
import {connect} from 'react-redux';

class PrintNum extends Component{
	render() {
		let {num} = this.props;
		return (
			<div className="print-num">
				num: {num}
			</div>
		);
	}
}

export default connect((state) => {return state;})(PrintNum);