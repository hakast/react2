import React, { Component } from 'react';
import './App.css';
import './styles/Style.css';
import Home from './components/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Expertise from './components/read-more-pages/Expertise';
import Fleet from './components/read-more-pages/Fleet';
import Services from './components/read-more-pages/Services';
import Whatwedo from './components/read-more-pages/Whatwedo';


import {BrowserRouter as Router, HashRouter, Route, Link, Switch} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div  style={{ verticalAlign: 'middle' }}>

{/* https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */}
      <HashRouter>
        <div>
          <ul className="menu" >
            <Link to="/home">
            <span className="menyTextTruck">TRUCK</span>
            <span className="menyTextUnder">TRANSPORTFÖRETAG</span>
            </Link>
            <div className="blockOfLinks">
              <li><Link className="link" to="/home">HEM</Link></li>
              <li><Link className="link" to="/about">OM</Link></li>
              <li><Link className="link" to="/contact">KONTAKT</Link></li>
            </div>
          </ul>
          {/* <li><Link className="link" to="/expertise"></Link></li>
          <li><Link className="link" to="/fleet"></Link></li>
          <li><Link className="link" to="/services"></Link></li>
          <li><Link className="link" to="/whatwedo"></Link></li> */}


          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Route path="/expertise" component={Expertise} />
          <Route path="/fleet" component={Fleet} />
          <Route path="/services" component={Services} />
          <Route path="/whatwedo" component={Whatwedo} />

          {/* Extra paths withput menu link */}
          <Route path="*" component={Home} />
        </Switch>
        </div>
    </HashRouter>
  </div>
)
}
};

export default App;
