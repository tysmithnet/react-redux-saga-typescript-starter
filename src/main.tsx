import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component <{}, {}>{
    render() {
        return <h1>hi!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));