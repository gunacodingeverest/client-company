import React from "react";
import { Table } from "react-bootstrap";
import tickets from "../asset/data/dummy-tickets.json";
const TicketTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((rowss) => (
            <tr key={rowss.id}>
              <td>{rowss.id}</td>
              <td>{rowss.subject}</td>
              <td>{rowss.status}</td>
              <td>{rowss.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan="4">
              No tickets to Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
