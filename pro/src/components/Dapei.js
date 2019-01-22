import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Dapei.css';
class Dapei extends Component {
  render() {
    return (
      <div className="Dapei">
      <header className="ld-head">
        <p>搭配</p>
      </header>
      <section className="ld-sect">
      </section>
        <Footer/>
      </div>
    );
  }
}

export default Dapei;
