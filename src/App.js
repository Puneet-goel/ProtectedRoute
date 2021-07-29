import React,{ useState } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Login from "./components/Login/Login.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Secrets from "./components/ProtectedRoute/Secrets/Secrets.js";
import Error from "./components/ProtectedRoute/Error/Error.js";

function App() {
	const [user,setUser] = useState(false);
	const changeUserState = () => {
		setUser(!user);
	}
	
	return (
	  	<BrowserRouter>
	  	    <Switch>
	            <Route exact path="/">
	                <Login changeUserState={changeUserState}/>
	            </Route>
	            <Route path="/secrets">
	                <ProtectedRoute mainPage={<Secrets />} errorPage={<Error />} isValid={user}/>
	            </Route>            
	        </Switch>
	    </BrowserRouter>
    );
}

export default App;