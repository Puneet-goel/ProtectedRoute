import React from 'react';
import { Route } from "react-router-dom";

const ProtectedRoute = ({mainPage, errorPage, isValid}) => {

    return (
    	<div>
	    	{
                (isValid.email)
                ?<Route render={() => mainPage} />
                :<Route render={() => errorPage}/>
            }
	    </div>
    );
}

export default ProtectedRoute;