
import React  from "react";
import { Provider } from "react-redux";
import store from './config/redux/store'
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Register from "./components/auth/Register";




function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
