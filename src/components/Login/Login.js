import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";
import { useHistory } from "react-router-dom";

import data from "../../api/api.js";
import "./styles.css";

const Login = (props) => {

   const history = useHistory();

   const handleSubmit = (event) => {
      event.preventDefault();

      const password = event.target.password.value;
      const email = event.target.email.value;

      const x = data.find(e => e.email===email && e.password===password);

      if(x!==undefined ){
         props.changeUserState(email);
         sessionStorage.setItem("email",email);
         sessionStorage.setItem("password",password);
      }
      history.push("/secrets");
   }
   
   return (
      <Form className="form" onSubmit={handleSubmit}>
         <h2 className="text-center"> Login </h2>
         <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="Enter email" />
            <FormText color="muted">
               We'll never share your email with anyone else.
            </FormText>
         </FormGroup>
         <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" type="password" name="password"  placeholder="Password" />
         </FormGroup>
         <Button color="primary" className="btn btn-lg btn-block">
            Login
         </Button>
      </Form>
   );
}

export default Login;