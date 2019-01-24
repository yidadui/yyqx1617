import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../styles/Xingnan.css';
class Xingnan extends Component {
  bb(){
  	this.props.history.go(-1)
  }
  render() {
    return (
      <div className="Xingnan">
      	<header className="j-xh">
      		<span onClick={this.bb.bind(this)}>&lt;</span>
      		<span>型男改造</span>
      	</header>
        <section className="j-xs">
        	
        </section>
      </div>
    )
  }
}

export default Xingnan;