import React, {Component} from 'react';

import PrintNum from './PrintNum';
import ChangeNum from './ChangeNum';

class Container extends Component{

	constructor(props){
		super(props);
		this.state = {
			num: 34
		};

		this.addNum = this.addNum.bind(this);
		this.subNum = this.subNum.bind(this);
	}

	addNum(){
		let {num} = this.state;
		this.setState({
			num: ++num
		});
	}

	subNum(){
		let {num} = this.state;
		this.setState({
			num: --num
		});
	}

	render() {
		let {num} = this.state;
		return (
			<div className="react-container">
				<h1>React</h1>
				<PrintNum num={num}/>
				<ChangeNum addNum={this.addNum} subNum={this.subNum}/>
			</div>
		);
	}
}

export default Container;