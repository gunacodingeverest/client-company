import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import TicketTable from "../component/TicketTable";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px,30px" }}
          >
            Add a Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-1 mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2 mb-2">
          <div>Recently added Tickets</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2 mb-2">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
