import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemberRegister = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h4>Member Registration Form</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8" style={{ borderRadius: 5, border: "1px solid #dee3e0", padding: 10, marginTop: 10 }}>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text" name="lastName" id="firstName" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text" name="lastName" id="lastName" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="age">Age</Label>
                                    <Input type="text" name="age" id="age" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="designation">Designation</Label>
                                    <Input type="text" name="designation" id="designation" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="startDate">Start Date</Label>
                                    <Input type="text" name="startDate" id="startDate" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" />
                        </FormGroup>
                        <Row form>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input type="text" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input type="text" name="state" id="exampleState" />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input type="text" name="zip" id="exampleZip" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="mobile">Mobile No.</Label>
                                    <Input type="text" name="mobile" id="mobile" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="whatsApp">Whatsapp No.</Label>
                                    <Input type="text" name="whatsApp" id="whatsApp" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default MemberRegister