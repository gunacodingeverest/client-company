import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import AddTicketForm from "../component/AddTicketForm";
import BreadCrumb from "../component/BreadCrumb";
import "./NewTicketPage.css";
const NewTicketPage = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5 mb-2">
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-2 ">
          <h2 className="text-info text-center">Add New Ticket</h2>
          <hr />
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};

export default NewTicketPage;
