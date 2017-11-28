import React, {Component} from 'react';

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

export default PrintNum;