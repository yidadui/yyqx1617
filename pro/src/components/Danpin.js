import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Danpin.css';
import IScroll from 'iscroll/build/iscroll-probe';
import pic1 from '../img/t.png';
import pic2 from '../img/map.png';
import $ from 'jquery'




class Danpin extends Component {
	constructor(props){
		super(props)
	}
	dianji(){
	
			$('.outer ul').slideToggle()
	
		
	}
	componentDidMount(){
		$('.outer ul').hide()
		
  	var myscroll=new IScroll('section',{
  		click:true,
    	vscrollbars: false,
    	mouseWheel: true,
  	})
  	
  }
  render() {
    return (
      <div className="Danpin">
				<header className='z-dan'>
							<span>购物车</span>
              <b>单品</b>
							<em>放</em>
				</header>
        <section className="dan">
        	<div className='z-section'>
						<div className='jieshao' onClick={this.dianji.bind(this)}>
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
											<li>
												<img src={pic2}/>
												<span>墨镜</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>帽子</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>袜子</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>手表</span>
											</li>


											<li>
												<img src={pic2}/>
												<span>墨镜</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>帽子</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>袜子</span>
											</li>
											<li>
												<img src={pic2}/>
												<span>手表</span>
											</li>
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