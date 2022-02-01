import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddTicketForm = () => {
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const [details, setDetails] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "subject") {
      setSubject(value);
    } else if (name === "issue") {
      setIssue(value);
    } else {
      setDetails(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!subject || !issue || !details) {
      return alert("Please fill all the details");
    }
    console.log(subject, issue, details);
  };
  return (
    <Form
      onSubmit={handleOnSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Subject
        </Form.Label>
        <Col sm="5">
          <Form.Control
            type="text"
            placeholder="Enter text..."
            name="subject"
            value={subject}
            onChange={handleOnChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Issue found at
        </Form.Label>
        <Col sm="5">
          <Form.Control
            type="date"
            name="issue"
            onChange={handleOnChange}
            required
            value={issue}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Details
        </Form.Label>
        <Col sm="5">
          <Form.Control
            as="textarea"
            placeholder="Enter Details..."
            name="details"
            onChange={handleOnChange}
            value={details}
            required
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default AddTicketForm;
