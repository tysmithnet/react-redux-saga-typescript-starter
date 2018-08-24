import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import App from "./app/App";
import rootSaga from "./root.saga";
import store, { sagaMiddleware } from "./root.store";

sagaMiddleware.run(rootSaga);
function render(component: JSX.Element) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {component}
      </Provider>
    </AppContainer>,
    document.getElementById("root"),
  );
}

render(<App />);
