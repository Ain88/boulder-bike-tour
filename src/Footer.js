import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return ( <div className="footer-area">
        {
          <div className="container">
          <footer className="page-footer">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="text-uppercase">Boulder Bike Tour</h5>
                <p>Boulder Bike Tours offers unique trips that showcase the natural beauty of
                the area from the seat of your bicycle. Boulder Bike Tours’ staff not only has
                years of bike touring expertise but also a contagious passion for the sport of cycling.</p>

              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Contact</h5>
                <p>Lets get in touch!</p>
                <p>Cell: 240-555-6231<br />
                Email: info@boulderbike.com</p>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">

                <h5 className="text-uppercase">Social Media Links</h5>
                <p className="bottom-padding">Lets stay connected!</p>
                <a href="https://twitter.com/" className="fa fa-twitter"></a>&nbsp;
                <a href="https://youtube.com/" className="fa fa-youtube"></a>&nbsp;
                <a href="https://instagram.com/" className="fa fa-instagram"></a>
              </div>

            </div>

          </div>
          <hr className="color-white"/>
          <div className="footer-copyright text-center py-3">© 2020 Copyright @
            <a href="https://ain88.github.io/portfolio"> BoulderBikeTour</a>
          </div>
          </footer></div>
        }
    </div>
    );
  }
}


export default Footer;
