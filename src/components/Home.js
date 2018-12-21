import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Col, Row } from 'antd';
import Contact from './contact/Contact';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../styles/Style.css';
import constants from '../redux/Constants';
import twelve from '../images/twelve.jpg';
import six from '../images/six.jpg';

class Home extends Component {
  componentDidMount() {
window.scrollTo(0, 0)
}

   render() {
     if(this.props.expertise) {
    return <Redirect to="/Expertise" push={true} />
  };
    if(this.props.fleet) {
   return <Redirect to="/Fleet" push={true} />
 };
  if(this.props.whatwedo) {
  return <Redirect to="/WhatWeDo" push={true} />
};
  if(this.props.services) {
  return <Redirect to="/Services" push={true} />
};

   return(
   <div style={{backgroundColor: '#EBEBEB'}}>
     <Row>
       <div
        style={{
        paddingLeft: '15px',
        paddingRight: '15px',
        marginRight: '10px',
        // color: 'black',
        backgroundColor: 'white',
        opacity: '0.7',
        position: 'absolute',
        top: '150px',
        right: '0px',
        width: '300px'
        }}
         >
         <span>
           <h2><p style={{
             paddingTop: '10px',
             paddingRight: '10px',
             marginBottom: '-10px',
             color: 'gray'
           }}>TRANSPORTER</p>
       </h2>
        <p style={{
          color: 'black'
        }}
        >Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
       </span>
       </div>

       <img src={twelve} alt={''} style={{ width: '100%', marginTop: '105px' }}/>
     </Row>
    <Row gutter={0} style={{ backgroundColor: '#E11313' }}>
      <Col span={18}>
        <div
         style={{
         color: 'white',
         position: 'absolute',
         top: '20px',
         left: '20px',
         width: '80%'
         }}
          >
          <span>
            <h2><p style={{
              fontSize: '5vw',
              color: 'white',
              marginBottom: '-10px'
            }}>VÅRA TJÄNSTER</p>
            </h2>
            <h6><p style={{
              color: 'white',
              fontSize: '2vw'
            }}>LOREM IPSUM ÄR NÅGOT MAN ANVÄNDER SOM UTFYLLNADSTEXT</p>
            </h6>

         <p style={{ fontSize: '1.5vw' }}>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
        </span>
        <button
          className="serviceButton"
          onClick={this.props.clickServices}
          > LÄS MER</button>
        </div>
      </Col>
      <Col span={6}>
        <img src={six} alt={''} style={{ width: '100%' }}/>
      </Col>
   </Row>

   <Row
     gutter={24}
     type="flex"
     style={{ height: '400px', paddingTop: '30px'}}
     >
     <Col span={8}>
      <div style={{ padding: '25px'}}>
        <span>
          <h2 style={{ fontWeight: '700'}}>VÅR <br />FLOTTA</h2>
        </span>
        <h6><p style={{
          color: '#E11313'
        }}>LOREM IPSUM ÄR NÅGOT ATT VID BEHOV ANVÄNDA SOM UTFYLLNAD</p>
        </h6>
        <p style={{fontSize: '1.3vw'}}>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>

      </div>


     </Col>
     <Col span={8}>
       <div style={{ padding: '25px'}}>
         <span>
           <h2 style={{ fontWeight: '700'}}>VÅR <br />EXPERTIS</h2>
         </span>
         <h6><p style={{
           color: '#E11313'
         }}>LOREM IPSUM ÄR NÅGOT ATT VID BEHOV ANVÄNDA SOM UTFYLLNAD</p>
         </h6>
         <p style={{fontSize: '1.3vw'}} >Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
       </div>

     </Col>
     <Col span={8}>
       <div style={{ padding: '25px'}}>
         <span>
           <h2 style={{ fontWeight: '700'}}>VAD <br />VI GÖR</h2>
         </span>
         <h6><p style={{
           color: '#E11313'
         }}>LOREM IPSUM ÄR NÅGOT ATT VID BEHOV ANVÄNDA SOM UTFYLLNAD</p>
         </h6>
         <p style={{fontSize: '1.3vw'}} >Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. </p>
       </div>
     </Col>
   </Row>
   <Row style={{marginLeft: '20px', paddingBottom: '30px'}}
     gutter={24}
     type="flex"
>
  <Col span={8}>
    <button
      className="readMoreButton"
      onClick={this.props.clickFleet}
      >LÄS MER</button>

  </Col>
  <Col span={8}>
    <button
      className="readMoreButton"
      onClick={this.props.clickExpertise}
      >LÄS MER</button>

  </Col>
  <Col span={8}>
    <button
      className="readMoreButton"
      onClick={this.props.clickWhatWeDo}
      >LÄS MER</button>
  </Col>
   </Row>
   <br />

   <Row>
     <Contact />
   </Row>
   </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state)
  return {
    expertise: state.expertise,
    fleet: state.fleet,
    whatwedo: state.whatwedo,
    services: state.services
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    clickExpertise: () => {
      const action = { type: constants.READ_MORE_EXPERTIS };
      dispatch(action);
      window.location.reload();
    },
    clickFleet: () => {
      const action = { type: constants.READ_MORE_FLEET };
      dispatch(action);
      window.location.reload();
    },
    clickWhatWeDo: () => {
      const action = { type: constants.READ_MORE_WHAT_WE_DO };
      dispatch(action);
      window.location.reload();
    },
    clickServices: () => {
      const action = { type: constants.READ_MORE_SERVICES };
      dispatch(action);
      window.location.reload();
    },

}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
