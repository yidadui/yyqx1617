import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
class Wode extends Component {
  render() {
    return (
      <div className="Wode">
        <Footer/>
      </div>
    );
  }
}

export default Wode;