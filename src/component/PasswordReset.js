import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the Email");
    }
    console.log(email);
  };
  return (
    <Row>
      <Col>
        <h1>Reset Password</h1>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Reset Password
          </Button>
        </Form>
        <Link to="/">Login In</Link>
      </Col>
    </Row>
  );
};

export default PasswordReset;
