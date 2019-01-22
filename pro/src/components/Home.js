import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
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
    data: ['1', '2', '3'],
    imgHeight: 176,
  	}
	}
  render() {
    return (
      <div className="Home">
        <header className="jhe">
        	<img src={J03}/>
        	<span className="iconfont">&#xe503;</span>
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
	              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
	            >
	              <img
	                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
        			<img src={J01}/>
        			<img src={J02}/>
        		</div>
        	</div>
        	<div className="jdapei">
        		<h1>搭配精选OUTFIT</h1>
        		<img src={J04}/>
        		<div className="juls">
	        		<ul className="jul">
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
	        			<li><img src={J05}/></li>
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
  	setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
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
