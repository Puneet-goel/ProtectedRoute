import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";

import "./styles.css";

const Login = () => {

   return (
      <Form className="form">
         <h2 className="text-center"> Login </h2>
         <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" type="email" name="email"  placeholder="Enter email" />
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