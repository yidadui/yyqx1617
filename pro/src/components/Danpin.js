import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Danpin.css';
import IScroll from 'iscroll/build/iscroll-probe';
import pic1 from '../img/t.png';
import pic2 from '../img/map.png';
import $ from 'jquery'




class Danpin extends Component {
	constructor(props){
		super(props)
		this.state={
			item:["墨镜","帽子","袜子","手表","墨镜","帽子","袜子","手表"]
		}
	}
	gocart(){
		this.props.history.push("/Cart");
	}
	componentDidMount(){
		$('.outer ul').hide()
		$('.jieshao').click(function(){
			$(this).next().find($('ul')).stop().slideToggle().parent().siblings().find($('ul')).stop().slideUp()
		})
  	{/*var myscroll=new IScroll('section',{
  		click:true,
    	vscrollbars: false,
    	mouseWheel: true,
  	})*/}

  }
  render() {
		var sty1={
			fontSize:"2vh",
			lineHeight:"4vh",
		}
    return (
      <div className="Danpin">
				<header className='z-dan'>
							<span className="iconfont" style={sty1} onClick={this.gocart.bind(this)}>&#xe503;</span>
              <b>单品</b>

				</header>
        <section className="dan">
        	<div className='z-section'>
						<div className='jieshao' >
								<div className='z-left'>
									<h2>上衣</h2>
									<p>潮流新款 休闲帅气</p>
								</div>
								<div className='z-right'>
									<img src={pic1}/>
								</div>
						</div>

							<div className='outer'>
								<ul>
								{
									this.state.item.map(function(wz,i){
										return(
											<li key={i}>
											<img src={pic2}/>
											<span>{wz}</span>
											</li>
										)
									})
								}
								</ul>
							</div>
							<div className='jieshao' >
								<div className='z-left'>
									<h2>裤子</h2>
									<p>潮流新款 休闲帅气</p>
								</div>
								<div className='z-right'>
									<img src={pic1}/>
								</div>
						</div>

							<div className='outer'>
								<ul>
								{
									this.state.item.map(function(wz,i){
										return(
											<li key={i}>
											<img src={pic2}/>
											<span>{wz}</span>
											</li>
										)
									})
								}
								</ul>
							</div>
							<div className='jieshao' >
								<div className='z-left'>
									<h2>潮鞋</h2>
									<p>潮流新款 休闲帅气</p>
								</div>
								<div className='z-right'>
									<img src={pic1}/>
								</div>
						</div>

							<div className='outer'>
								<ul>
								{
									this.state.item.map(function(wz,i){
										return(
											<li key={i}>
											<img src={pic2}/>
											<span>{wz}</span>
											</li>
										)
									})
								}
								</ul>
							</div>
							<div className='jieshao' >
								<div className='z-left'>
									<h2>配饰</h2>
									<p>潮流新款 休闲帅气</p>
								</div>
								<div className='z-right'>
									<img src={pic1}/>
								</div>
						</div>

							<div className='outer'>
								<ul>
								{
									this.state.item.map(function(wz,i){
										return(
											<li key={i}>
											<img src={pic2}/>
											<span>{wz}</span>
											</li>
										)
									})
								}
								</ul>
							</div>
							<div className='jieshao' >
								<div className='z-left'>
									<h2>护理</h2>
									<p>潮流新款 休闲帅气</p>
								</div>
								<div className='z-right'>
									<img src={pic1}/>
								</div>
						</div>

							<div className='outer'>
								<ul>
								{
									this.state.item.map(function(wz,i){
										return(
											<li key={i}>
											<img src={pic2}/>
											<span>{wz}</span>
											</li>
										)
									})
								}
								</ul>
							</div>

					</div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Danpin;
