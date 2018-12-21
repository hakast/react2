import React, {Component} from 'react';
import querystring from 'querystring';
import axios from 'axios';
import { Col, Row, Form, Input} from 'antd';
import { Alert, FormGroup } from 'reactstrap';

// import 'antd/dist/antd.css';
import '../../styles/Style.css';
// import { connect } from 'react-redux';
// import constants from '../redux/constants/constants';

const { TextArea } = Input;


class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    phone: '',
    msg: '',
    visible: false,
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onDismiss = this.onDismiss.bind(this);
}

onDismiss() {
  this.setState({ visible:false });
}

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state.name + this.state.email);
//   let config = {
//     headers: {
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//     // 'Access-Control-Allow-Origin': 'http://www.hakvik.se',
//     'Access-Control-Allow-Origin': 'http://127.0.0.1',
//     // 'Access-Control-Allow-Origin': 'localhost:3000',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     // 'Content-Type': 'multipart/form-data',
//     // 'Content-Type': 'application/json',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
// }
// };

// axios.post('http://www.hakvik.se/react/#/src/api/index.php/?/user',
// axios.post('http://localhost:3000/myProjects/react-truck/src/api/index.php/?/user',
axios.post('http://127.0.0.1/myProjects/react-truck/src/api/index.php/?/user',

  querystring.stringify({
  // JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      msg: this.state.msg
    })
    // config
)

.then(function(response) {
  console.log(response);
})

.catch(function (error) {
console.log(error);
});


  if(this.state.name &&
    this.state.email &&
    this.state.phone &&
    this.state.msg !== ''){

    this.setState({ visible:true });
  }
}

render() {
  const name = ['Namn: ' + this.state.name ];
  const email = ['Mail: ' + this.state.email];
  const phone = ['Telefon: ' + this.state.phone];
  const msg = ['Meddelande: ' + this.state.msg]

return(
<div style={{backgroundColor: '#EBEBEB'}}>
  <div>
  <Alert
    style={{
      width: '344px',
      position: 'absolute',
      left: '370px',
      top: '100px',
      zIndex: '4'

   }}
    color="danger"
    isOpen={this.state.visible}
    toggle={this.onDismiss}
    >
    <h4 className="alert-heading">Tack för feedback!</h4>
    <p>
      Dessa uppgifter har sparats i databasen:
    </p>
    <hr />
    {name}
    <br />
    {email}
    <br />
    {phone}
    <hr />
    {msg}
  </Alert>
</div>

 <Row style={{ paddingTop: '140px'}}
   >
   <Col span={8} style={{ paddingLeft: '20px'}}>
     <div>
       <h4>ADRESS</h4>
       <p>Hammarby allé 119 <br />120 64 Stockholm</p>
       <h4>TELEFON</h4>
       <p>070-444 64 39</p>
       <h4>MAIL</h4>
       <p>hakast@gmail.com</p>

     </div>
   </Col>

   <Col span={16} style={{ paddingLeft: '70px'}}>
       <h4>ÖNSKAR MER INFO</h4>
       <p>
         FYLL I SAMTLIGA FÄLT! <br />
         Maila oss för frågor eller använd kontaktdata
       </p>

       <Form onSubmit={this.handleSubmit}>

          <FormGroup style={{ width: "50%" }}>
              <Input
                onChange={event => this.setState({name: event.target.value})}
                type="text"
                name="name"
                placeholder="För- och efternamn" />
          </FormGroup>

          <FormGroup style={{ width: "50%" }} >
              <Input
                onChange={event => this.setState({email: event.target.value})}
                type="email"
                name="email"
                placeholder="Mail" />
          </FormGroup>

          <FormGroup  style={{ width: "50%" }}>
              <Input
                onChange={event => this.setState({phone: event.target.value})}
                type="text"
                name="phone"
                placeholder="Telefon" />
          </FormGroup>

          <FormGroup  style={{ width: "50%" }}>
            <TextArea
              onChange={event => this.setState({msg: event.target.value})}
              rows={3}
              type="textarea"
              name="msg"
              placeholder="Meddelande"
            />
          </FormGroup>

          <button
            type="submit"
            style={{
            color: 'white',
            fontSize: '2em',
            fontWeight: '500',
            backgroundColor: '#E11313',
            height: '70px',
            width: '50%',
            border: '0px',
            marginBottom: '75px'
          }}>SKICKA</button>

        </Form>

   </Col>
 </Row>

</div>
);
}
};
export default Contact;
