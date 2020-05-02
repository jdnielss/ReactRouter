import React, { Fragment } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import GuestTable from './GuestTable';
import GuestForm from './GuestForm'

class GuestBookContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: 0,
        name: '',
        address: ''
      },
      guests: [{
        id: 1,
        name: 'Test',
        address: 'Test'
      }],
    };
  }

  handleInputChanges = (inputName, inputValue) => {
    const { form } = { ...this.state };
    form[inputName] = inputValue;

    this.setState({ form });
  }

  resetForm() {
    this.setState({ form: { id: 0, name: '', address: '' } });
  }

  isValidForm = () => {
    const { form } = this.state;

    return ( form.name.trim().length > 0 && form.address.trim().length > 0 );
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { form, guests } = { ...this.state };

    if (form.id > 0) {
      let newGuests = guests.map((guest) => {
        if (guest.id === form.id) {
          return form;
        }

        return guest;
      });

      this.setState({ guests: newGuests });
    }
    else {
      form.id = guests.length + 1;
      this.setState({ guests: guests.concat({ ...form }) });
    }

    this.resetForm();
    this.props.history.replace("/guests");
  }

  handleEditButton = (id) => {
    const { guests } = { ...this.state };
    const guest = guests.find((guest) => guest.id === id);

    console.log('guest to edit:', guest);
    this.setState({ form: { ...guest } });
  }

  handleDeleteButton = (id) => {
    const { guests } = { ...this.state };

    this.setState({ guests: guests.filter( (guest) => guest.id !== id ) });
  }

  handleReturn = () => {
    this.resetForm();
    this.props.history.replace("/guests");
  }

  render() {
    const { form, guests } = this.state;

    const formFunctions = {
      handleFormSubmit: this.handleFormSubmit,
      handleInputChanges: this.handleInputChanges,
      handleReturn: this.handleReturn,
      isValidForm: this.isValidForm,
    };

    const tableFunctions = {
      handleEditButton: this.handleEditButton,
      handleDeleteButton: this.handleDeleteButton,
    };

    console.log(this.props);
    

    return(
        <Fragment>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/guests" render ={() => <GuestTable tableFunctions={tableFunctions} guests={guests}/>}/>
                <Route path="/guests/form/:id?" render={() => <GuestForm form={form} formFunctions={formFunctions} />} />
              </Switch>
            </Col>
          </Row>
        </Fragment>
      )
  }
}

export default withRouter(GuestBookContainer)