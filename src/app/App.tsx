import * as React from "react";
import {hot} from "react-hot-loader";
import {connect} from "react-redux";
import Login from "../auth/Login";
import { Menu } from "../menu/Menu";
import {IRootState} from "../state";
import { IProps } from "./domain";

class App extends React.Component<IProps> {
  public render() {
    let component: React.ReactNode = null;
    if (this.props.user) {
      component = <h1>Welcome!! {this.props.user.name}1!!</h1>;
    }
    else {
      component = <Login />;
    }

    return (
      <div>
        {component}
        <Menu name="men11uuu" />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState): any {
  return {
    user: state.app.user,
  };
}

const connectedComponent = connect(mapStateToProps)(hot(module)(App));
export default connectedComponent;