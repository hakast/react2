import React, {Component} from 'react';
// import {Button, Card, Col, Row} from 'antd';
// import 'antd/dist/antd.css';
// import '../../styles/Style.css';
// import { connect } from 'react-redux';
// import constants from '../redux/constants/constants';
// import twelve from '../images/twelve.jpg';

class About extends Component {
   render() {

   return(
     <div style={{ padding: '150px'}}>
       <span>
         <h2 style={{ fontWeight: '700'}}>OM OSS</h2>
       </span>
       <h6><p style={{
         // color: '#E11313'
       }}>LOREM IPSUM ÄR NÅGOT ATT VID BEHOV ANVÄNDA SOM UTFYLLNAD</p>
       </h6>
       <p style={{fontSize: '1.5vw'}}>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
       <br />
       <p style={{fontSize: '1.5vw'}}>Throughout its history, the company has expanded its offerings and capitalized on evolving management trends and technologies to benefit its clients. The company pioneered systems integration and business integration; led the deployment of enterprise resource planning, customer relationship management and electronic services; and has established itself as a leader in today's global marketplace. Combining unparalleled experience, comprehensive capabilities across all industries and business functions, and extensive research on the world’s </p>

     </div>
    );
  }
};
export default About;
