import React from 'react';
import { Button } from "reactstrap";

const Secrets = () => {

	const logout = () => {
		sessionStorage.clear();
	}

    return (
    	<>
    	    <div className="text-center">
		    	<h1 className="text-primary mt-5"> Secrets </h1>
		    	<h1 className="text-primary mt-3"> Hello, {sessionStorage.getItem("email")} </h1>
		    	<Button type="submit" color="primary" className="btn btn-lg mt-2" onClick={logout}>
		            Logout
		        </Button>
	        </div>
    	</>
    );
}

export default Secrets;