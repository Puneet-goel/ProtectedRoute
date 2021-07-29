import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";
import { Link } from "react-router-dom";

import "./styles.css";

const Login = () => {

   const handleSubmit = (event) => {
      localStorage.setItem("password",event.target.password.value);
      localStorage.setItem("email",event.target.email.value);
      event.preventDefault();
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
            <Link to="/protectedRoute">
               Login
            </Link>   
         </Button>
      </Form>
   );
}

export default Login;