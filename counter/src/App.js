import React, { Component } from 'react';
import './App.css';
import {Row,Col} from "react-bootstrap";

import Counter from "./Counter/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Row className="Row">
          <Col xs={6}>
       <Counter/>
       </Col>
       <Col xs={6}>
       <Counter dis/>
       </Col>
       </Row>
      </div>
    );
  }
}

export default App;
