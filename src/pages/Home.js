import React, { Component } from 'react';
import Countdown from "./sub-pages/Countdown";
import { Button, Row, Col, Card, Carousel } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = { deadline: "April, 1, 2021" };
}
  render() {

    return (
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/bg2.jpg')}
            alt="First Slide"
          />
        <Carousel.Caption>
            <h2>Boulder Bike Tour</h2>
            <h4>Experience Bike Race takes place in Colorado<br />EVENT DATE: 2021 April 1st, 8am</h4>
            <div className="countdown"><Countdown deadline={this.state.deadline} /></div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../img/bg4.jpg')}
            alt="Second Slide"
          />
        <Carousel.Caption>
            <h2>Boulder Bike Tour</h2>
            <h4>Enjoy at the foot of the Rocky Mountains, Colorado Style.<br />EVENT DATE: 2021 April 1st, 8am</h4>
            <div><Countdown deadline={this.state.deadline} /></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <div className = "container content main">
        <Row>
          <Col md={6}>
          <h3>About Boulder Bike Tour</h3><br />
          <p>Headquartered in beautiful Boulder, Colorado, the jewel of the Rocky Mountain Front Range,
            Boulder Bike Tours offers guided mountain biking & road biking tours showcasing the landscape,
             culture & history of the Boulder region. BBT provides single-day trips & multi-day cycling
             adventures for visitors who want to discover what’s special about Boulder County.
            We take care of all the details so you enjoy the best riding led by expert local guides
             matched to your skills & interests. BBT delivers first-class support & service… and we
             make it fun.</p><br />
           <h3>About Colorado...</h3><br />
           <p>Colorado, a western U.S. state, has a diverse landscape of arid desert, river canyons
             and snow-covered Rocky Mountains, which are partly protected by Rocky Mountain National
             Park. Elsewhere, Mesa Verde National Park features Ancestral Puebloan cliff dwellings.
             Perched a mile above sea level, Denver, Colorado’s capital and largest city, features
              a vibrant downtown area.</p>
          </Col>
          <Col md={6}>
          <h3>Event Date</h3><br />
          <h5>WHEN: <small>2021 April 1, at 8am</small> </h5>
          <h5>WHERE: <small>Denver Public Library: Central Library</small></h5><br />
          <h3>Check out our vids and new!...</h3><br />
          <iframe width="80%" height="50%"
            src="https://www.youtube.com/embed/1R6jHBf9jrI">
          </iframe>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Home;
