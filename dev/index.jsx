import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render(){
		return(
				<div>
					<p>hello world</p>
				</div>
			);
	}
};

ReactDOM.render(<div><HelloWorld></HelloWorld></div>,document.querySelector('#container'));