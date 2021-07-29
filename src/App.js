import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";

function App() {
  return (
  	<BrowserRouter>
  	    <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/protectedRoute">
                <ProtectedRoute />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;