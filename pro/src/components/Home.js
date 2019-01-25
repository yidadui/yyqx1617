import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import IScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';
import { Carousel, WingBlank } from 'antd-mobile';
import '../styles/Home.css';
import J01 from '../img/j01.png';
import J02 from '../img/j02.png';
import J03 from '../img/j03.gif';
import J04 from '../img/j04.png';
import J05 from '../img/j05.png';
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
    data: [
			'https://up.enterdesk.com/edpic/27/7e/50/277e50a5a7bed32ba5fb37ac3aebd66a.jpg',
			 'https://up.enterdesk.com/edpic/3b/99/e8/3b99e8d7022d153a5a3a6743648daa9d.png',
			'https://up.enterdesk.com/edpic/7b/19/ed/7b19edaab1b6c6b956f0a6d26439b904.jpg'],
    imgHeight: 176,
  	}
	}
	gocart(){
		this.props.history.push("/Cart");
	}
  xing(){
  	this.props.history.push("/xingnan")
  }
  wen(){
  	this.props.history.push("/guwen")
  }
  chao(){
  	this.props.history.push("/chaopin")
  }
  render() {
    return (
      <div className="Home">
        <header className="jhe">
        	<img src={J03}/>
        	<span className="iconfont" onClick={this.gocart.bind(this)}>&#xe503;</span>
        	<span className="iconfont"></span>
        </header>
        <section className="jse">
        <div>
	        <WingBlank>
	        <Carousel
	          autoplay={true}
	          infinite
	        >
	          {this.state.data.map(val => (
	            <a
	              key={val}
	              href="javascript:void(0)"
	              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight+"px" }}
	            >
	              <img
	                src={val}
	                alt=""
	                style={{ width: '100%', verticalAlign: 'top' }}
	                onLoad={() => {
	                  // fire window resize event to change height
	                  window.dispatchEvent(new Event('resize'));
	                  this.setState({ imgHeight: 'auto' });
	                }}
	              />
	            </a>
	          ))}
	        </Carousel>
	      </WingBlank>
        	<div className="jhuo">
        		<h1>活动精选EVENT</h1>
        		<div className="jtu">
        			<img src={J01} onClick={this.wen.bind(this)}/>
        			<img src={J02} onClick={this.xing.bind(this)}/>
        		</div>
        	</div>
        	<div className="jdapei">
        		<h1>搭配精选OUTFIT</h1>
        		<img src={J04} onClick={this.chao.bind(this)}/>
        		<div className="juls">
	        		<ul className="jul">
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        			<li><img src={J05} onClick={this.chao.bind(this)}/></li>
	        		</ul>
        		</div>
        	</div>
        </div>
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
  	var myscroll1=new IScroll('.juls',{
  		click:true,
    	scrollX:true
  	})
  }
}
export default Home;
