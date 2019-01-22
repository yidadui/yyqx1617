import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import '../styles/Home.css';
import IScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
        
        </header>
        <section>
        	<ul>
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
