import React, { Component } from 'react';
import { Card, CardHeader, Table, Button } from 'reactstrap';
import FaIcon from '../../shared/fontawesome/FaIcon';
import { Link } from 'react-router-dom';

class GuestTable extends Component {

  generateTableRows = () => {
    const { guests, tableFunctions: { handleEditButton, handleDeleteButton } } = this.props;
    let rows = (
    <tr>
      <td colSpan="4" className="table-warning text-center">
        <strong><em>No guest(s) yet.</em></strong>
      </td>
    </tr>
    );

    if ( guests.length > 0 ) {
      rows = guests.map((guest, index) => {
        return (
          <tr key={index}>
            <th scope="row">{ index + 1 }</th>
            <td>{ guest.name }</td>
            <td>{ guest.address }</td>
            <td>
              <Link to={`/guests/form/${guest.id}`}>
                <Button type="button" color="warning" size="sm" className="shadow"
                  onClick={() => handleEditButton(guest.id) }>
                  <FaIcon icon="fas edit" /> Edit
                </Button>
              </Link>
            </td>
            <td>
              <Button type="button" color="danger" size="sm" className="shadow"
                onClick={() => handleDeleteButton(guest.id) }>
                <FaIcon icon="fas trash-alt" /> Delete
              </Button>
            </td>
          </tr>
        );
      });
    }
    return rows;
  }

  render() {
    const { guests } = this.props;
    return (
      <Card className="shadow">
        <CardHeader>
          <strong>Guests ({ guests.length })</strong>
          <Link to="/guests/form" className="float-right">
            <Button color="primary" size="sm">New Guest</Button>
          </Link>
        </CardHeader>
        <Table striped hover responsive className="m-0">
          <thead>
            <tr>
              <th width="5%">#</th>
              <th>Guest Name</th>
              <th>Guest Address</th>
              <th colSpan="2" width="15%">Actions</th>
            </tr>
          </thead>
          <tbody>{ this.generateTableRows() }</tbody>
        </Table>
      </Card>
      );
    }
}

export default GuestTable;
