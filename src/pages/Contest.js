import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Contest extends React.Component {
  render() {
    return (
      <div className="container content">
      <h2>Contest</h2><br />
      <h5>We are looking for a right slogan for us, winners get a prize! 🎁</h5><br />

      <Form className="contest">
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row><br />

        <Form.Control type="email" placeholder="Enter email" /><br />

        <Form.Control as="textarea" placeholder="Enter slogan idea within 50 words" rows="3" /><br />

        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </div>
    );
  }
}

export default Contest;
