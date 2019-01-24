import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../styles/Guwen.css';
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
        	
        </section>
      </div>
    )
  }
}

export default Guwen;