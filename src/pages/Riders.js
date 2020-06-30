import React from 'react';
import data from './sub-pages/rider.json'
import { Form, Row, Col, Button, Dropdown, Card, Media } from 'react-bootstrap';

const riders =  []


class Riders extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      riders,
    }

  }

  componentDidMount() {
    fetch('http://localhost:3000/riders.json')
    .then((response) => { return response.json(); })
    .then((myJson) => {
      this.setState({riders: myJson});
    });
  }

  render() {
    const {
      riders
    } = this.state;

    return (
      <div className="container content">
      <h2>Riders</h2><br />

      <ul className="riders list-unstyled row">
      {riders.map((rider) => (
        <Media as="li" key={rider.id} className ="col-md-6">
          <img
            className="mr-3 rider"
            src={require(`${rider.photo}`)}
            alt="rider image"
          />
          <Media.Body>
            <h5 className="align-left">{rider.first_name} {rider.last_name}</h5>
            <p className="align-left">
            Address: {rider.city},{rider.state}<br />
            Location: {rider.lat_long}
            </p>
          </Media.Body>
        </Media>
        ))}
      </ul>
      </div>
    );
  }
}

export default Riders;
