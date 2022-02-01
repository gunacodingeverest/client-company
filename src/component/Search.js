import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

const Search = ({ handleOnChange, search }) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Search:
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter text..."
            name="Search"
            value={search}
            required
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Search;
