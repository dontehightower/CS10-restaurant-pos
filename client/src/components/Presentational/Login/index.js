import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import * as s from './styles';

class Login extends React.Component {
  state = { email: '', pass: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <s.Container>
        <Link to="/register">Don&apos;t have an account? Register here</Link>
        <s.Form onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            type="text"
            onChange={this.handleChange}
            name="email"
            autoComplete="email"
            value={this.state.email}
          />
          <input
            placeholder="password"
            type="password"
            onChange={this.handleChange}
            name="pass"
            minLength="8"
            maxLength="21"
            autoComplete="current-password"
            value={this.state.pass}
          />
          <button type="submit">Submit</button>
        </s.Form>
      </s.Container>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: () => {},
};


export default Login;