import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extendes React.Component {
	render(){
		return(
				<div>
					<p>hello world</p>
				</div>
			);
	}
};

ReactDOM.render(<div><HelloWorld />,document.querySelector('#container'));