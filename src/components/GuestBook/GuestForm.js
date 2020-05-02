import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import FaIcon from '../../shared/fontawesome/FaIcon';

class GuestForm extends Component {
  render() {
    const { form, formFunctions: { handleFormSubmit, handleInputChanges, handleReturn, isValidForm } } = this.props;
    return (
      <Card className="shadow">
        <CardHeader tag="strong">Form</CardHeader>
        <CardBody>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup row>
              <Label for="name" sm="4">Guest Name</Label>
              <Col sm="8">
                <Input type="text" id="name" name="name" value={ form.name } onChange={ (event) => handleInputChanges('name', event.target.value) } placeholder="Enter guest name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm="4">Guest Address</Label>
              <Col sm="8">
                <Input type="textarea" id="address" name="address" value={ form.address } onChange={ (event) => handleInputChanges('address', event.target.value) } placeholder="Enter guest address" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{size: 8, offset: 4}}>
                <Button type="submit" color="primary" disabled={!isValidForm()} className="shadow mr-3">
                  <FaIcon icon="fas save" /> Submit
                </Button>
                <Button type="reset" color="secondary" onClick={handleReturn}>Return</Button>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default GuestForm;
