import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Home.css';
import IScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="jhe">
        
        </header>
        <section className="jse">
        	<ul className="juu">
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        		<li>1</li>
        	</ul>
        </section>
        <Footer/>
      </div>
    );
  }
  componentDidMount(){
  	var myscroll=new IScroll('section',{
  		click:true,
    	vscrollbars: false,
    	mouseWheel: true,
  	})
  	
  }
}
export default Home;
