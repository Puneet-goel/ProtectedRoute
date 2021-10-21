import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";

const Secrets = (props) => {

	const history = useHistory();
	const logout = (event) => {
		event.preventDefault();
		props.changeUserState(false);
		sessionStorage.clear();
		history.push('/');
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