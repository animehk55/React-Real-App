import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import product from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="box">
            <Col xs={2} md={2}>
            <img src={product} className="product-image" alt="product" />
            </Col>
            <Col xs={2} md={2}>
              <code>American Marigold (Asteraceae)</code>
            </Col>
            <Col xs={2} md={2}>
            <code>Price :  Rs. 45</code>
            </Col>
          </Row>
          <Row className="box">
            <Col xs={2} md={2}>
            <img src={product} className="product-image" alt="product" />
            </Col>
            <Col xs={2} md={2}>
              <code>American Marigold (Asteraceae)</code>
            </Col>
            <Col xs={2} md={2}>
            <code>Price :  Rs. 45</code>
            </Col>
          </Row>
          <Row className="box">
            <Col xs={2} md={2}>
            <img src={product} className="product-image" alt="product" />
            </Col>
            <Col xs={2} md={2}>
              <code>American Marigold (Asteraceae)</code>
            </Col>
            <Col xs={2} md={2}>
            <code>Price :  Rs. 45</code>
            </Col>
          </Row>
          <Row className="box">
            <Col xs={2} md={2}>
            <img src={product} className="product-image" alt="product" />
            </Col>
            <Col xs={2} md={2}>
              <code>American Marigold (Asteraceae)</code>
            </Col>
            <Col xs={2} md={2}>
            <code>Price :  Rs. 45</code>
            </Col>
          </Row>
          <Row className="box">
            <Col xs={2} md={2}>
            <img src={product} className="product-image" alt="product" />
            </Col>
            <Col xs={2} md={2}>
              <code>American Marigold (Asteraceae)</code>
            </Col>
            <Col xs={2} md={2}>
            <code>Price :  Rs. 45</code>
            </Col>
          </Row>        
        </Grid>;
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
