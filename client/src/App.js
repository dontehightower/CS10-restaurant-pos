import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import serverURI from './config/URI';

// Axios Defaults
axios.defaults.withCredentials = true;

class App extends Component {
  componentDidMount() {
    console.log('serverURI in cdm', serverURI);
    axios
      .post(`${serverURI}/api`, { message: 'Sent' })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello POS</h1>
      </div>
    );
  }
}

export default App;
