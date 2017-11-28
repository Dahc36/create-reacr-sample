import React, {Component} from 'react';

class ChangeNum extends Component{
	render() {
		let {addNum,subNum} = this.props;
		return (
			<div className="change-num">
				<button onClick={subNum}>- 1</button>
				<button onClick={addNum}>+ 1</button>
			</div>
		);
	}
}

export default ChangeNum;