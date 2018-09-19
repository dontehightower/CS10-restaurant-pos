import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addEmployee } from '../../redux/actions/auth';

import * as s from './styles';

class CreateEmployee extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    pass: '',
    confirmPass: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEmployee(this.state);
  };

  render() {
    return (
      <s.Container>
        Create a new employee
        <s.Form onSubmit={this.handleSubmit}>
          <input
            placeholder="First Name"
            type="text"
            onChange={this.handleChange}
            name="firstName"
            maxLength="30"
            value={this.state.firstName}
          />
          <input
            placeholder="Last Name"
            type="text"
            onChange={this.handleChange}
            name="lastName"
            maxLength="30"
            value={this.state.lastName}
          />
          <input
            placeholder="password"
            type="password"
            minLength="8"
            maxLength="30" // TODO: Look into max pass length
            onChange={this.handleChange}
            name="pass"
            value={this.state.pass}
          />
          <input
            placeholder="confirm password"
            type="password"
            minLength="8"
            maxLength="30" // TODO: Look into max pass length
            onChange={this.handleChange}
            name="confirmPass"
            value={this.state.confirmPass}
          />
          <button type="submit">Submit</button>
        </s.Form>
      </s.Container>
    );
  }
}

CreateEmployee.propTypes = {
  addEmployee: PropTypes.func,
};

CreateEmployee.defaultProps = {
  addEmployee: () => {},
};

export default connect(
  null,
  { addEmployee }
)(CreateEmployee);