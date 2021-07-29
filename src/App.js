import React,{ useState } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Secrets from "./components/ProtectedRoute/Secrets/Secrets.js";
import Error from "./components/ProtectedRoute/Error/Error.js";

function App() {
	const [user,setUser] = useState({
		'email': null,
		'password': null
	});

	return (
	  	<BrowserRouter>
	  	    <Switch>
	            <Route exact path="/">
	                <Login user={user} setUser={setUser}/>
	            </Route>
	            <ProtectedRoute path="/secrets" mainPage={<Secrets />} errorPage={<Error />} isValid={user}/>
	        </Switch>
	    </BrowserRouter>
    );
}

export default App;