import React from 'react';
import data from "../../api/api.js";

const checkUserCredentials = () => {

    const password = localStorage.getItem("password");
    const email = localStorage.getItem("email");

    localStorage.clear();

    const x = data.find( (element) => element.email===email && element.password===password);

    if(x===undefined){
        return false;
    }
    else{
        return true;
    }
}

const ProtectedRoute = () => {

	const bool = checkUserCredentials();
    return (
    	<div>
	    	{
	    		(bool)?"Validate User":"soory!"
	    	}
	    </div>
    );
}

export default ProtectedRoute;