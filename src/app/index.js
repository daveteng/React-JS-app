import React from "react";
import {render} from "react-dom";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="clo-xs-10 col-xs-offset-1">
						<h1>Hello Dave</h1>

					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));