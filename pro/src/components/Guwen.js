import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../styles/Guwen.css';
import IScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';
import J06 from '../img/j06.png';
import J07 from '../img/j07.png';
import J08 from '../img/j08.png';
import J09 from '../img/j09.png';
class Guwen extends Component {
  aa(){
  	this.props.history.go(-1)
  }
  render() {
    return (
      <div className="Guwen">
      	<header className="j-gh">
      		<span onClick={this.aa.bind(this)}>&lt;</span>
      		<span>穿衣顾问</span>
      	</header>
        <section className="j-gs">
        	<div>
	        	<img src={J06}/>
	        	<img src={J07}/>
	        	<img src={J08}/>
	        	<img src={J09}/>
        	</div>
        </section>
      </div>
    )
  }
   componentDidMount(){
  	var myscroll2=new IScroll('.j-gs',{
  		click:true,
    	vscrollbars: false,
    	mouseWheel: true,
  	})
  }
}

export default Guwen;