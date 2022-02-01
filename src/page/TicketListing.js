import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BreadCrumb from "../component/BreadCrumb";
import Search from "../component/Search";
import TicketTable from "../component/TicketTable";
import tickets from "../asset/data/dummy-tickets.json";

const TicketListing = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(tickets);
  useEffect(() => {}, [search, filtered]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    filterSearch(value);
  };

  const filterSearch = (search) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(displayTickets);
  };
  console.log(filtered);
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <Search handleOnChange={handleOnChange} search={search} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable table={filtered} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListing;
