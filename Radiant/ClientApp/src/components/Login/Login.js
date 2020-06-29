import React from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div style={{ border: "1px solid #dce0dd", borderRadius: 5, padding: 10 }} className="col-6">
                  
                <h2>Log In</h2>
                    <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                        </Col>
                        <div className="clearfix" style={{ padding: '.5rem' }}>
                            <button className="btn btn-secondary float-left">Submit</button>
                            <Link to="/register" className="float-right">Not registered. Register here.</Link>
                        </div>
                        
                    </Form>
        
                </div>
            </div>
        </div>
    )
}
export default Login