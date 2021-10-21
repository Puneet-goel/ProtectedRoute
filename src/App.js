import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login/Login.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Secrets from "./components/ProtectedRoute/Secrets/Secrets.js";
import Error from "./components/ProtectedRoute/Error/Error.js";

function App() {
	const [user,setUser] = useState(false);

	const changeUserState = (email) => setUser(email);
	
	useEffect(() => {
		const email = sessionStorage.getItem("email");	
		if(email){
			setUser(email);
		}
	},[]);

	return (
	  	<BrowserRouter>
	  	    <Switch>
	  	        <Route path="/secrets">
	                <ProtectedRoute mainPage={<Secrets changeUserState={changeUserState}/>} errorPage={<Error />} isValid={user} />
	            </Route> 
	            <Route exact path="/">
	                {user ? <Redirect to="/secrets" /> : <Login changeUserState={changeUserState}/>}
	            </Route>    
	        </Switch>
	    </BrowserRouter>
    );
}

export default App;