import React from 'react';
import $ from 'jquery';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';


function myFunction(arr) {
  var out1 = arr.replace(/[^,_()'a-zA-Z0-9\s]/g,' ');
  var out2 = out1.replace(/f_name|l_name|email|message/g,'');
  var out = out2.split(",").join("<br />");
  document.getElementById("id01").innerHTML = out;
}

class Contest extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleClick() {
    var f_name = this.refs.f_name.value;
    var l_name = this.refs.l_name.value;
    var email = this.refs.email.value;
    var message = this.refs.message.value;
    $.ajax({
      url: "http://localhost:3000/slogans",
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({ slogan: { f_name: f_name,
                      l_name: l_name,
                      email: email,
                      message: message } }),
                      async: false,
                      success: function (response) {
                        alert("Thank you!");
                        window.location.reload();
                      },
                      error: function(error) {
                        var myArr = JSON.stringify(error.responseText);
                        myFunction(myArr);
                      }

    });
  }
  render() {
    return (
      <div className="container content">
      <h2>Contest</h2><br />
      <h5>We are looking for a right slogan for us, winners get a prize! 🎁</h5><br />
      <Form className="contest">
      <span><Alert id="id01" variant={'info'}>
      </Alert></span>
        <Form.Row>
          <Col>
            <Form.Control input ref='f_name' input="true" placeholder="First name" />
          </Col>
          <Col>
            <Form.Control input ref='l_name' input="true" placeholder="Last name" />
          </Col>
        </Form.Row><br />

        <Form.Control type="email" input ref='email' input="true" placeholder="Enter email" /><br />

        <Form.Control as="textarea" input ref='message' input="true" placeholder="Enter slogan idea within 50 words" rows="3" /><br />

        <Button type="button" onClick={this.handleClick.bind(this)} variant="primary" >
          Submit
        </Button>
        </Form>
      </div>
    );
  }
}

export default Contest;
