import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../styles/Chaopin.css'
import { Carousel, WingBlank } from 'antd-mobile';
import J05 from '../img/j05.png';
class Chaopin extends Component {
	constructor(props){
		super(props)
		this.state = {
    data: ['1', '2', '3'],
    imgHeight: '80%',
  	}
	}
	go(){
		this.props.history.push("/dapei")
	}
	ss(){
  		this.props.history.push("/home")
  }
  render() {
  	
    return (
      <div className="Chaopin">
      	<header className="j-ch">
      		<span onClick={this.ss.bind(this)}>&lt;</span>
      		<span>潮品专区</span>
      	</header>
        <section className="j-cse">
	        	<div>
	        		<WingBlank>
	        <Carousel className="space-carousel"
	          frameOverflow="visible"
	          cellSpacing={10}
	          slideWidth={0.8}
	          autoplay
	          infinite
	          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
	          afterChange={index => this.setState({ slideIndex: index })}
	        >
	          {this.state.data.map((val, index) => (
	            <a
	              key={val}
	              href="javascript:void(0)"
	              style={{
	              	
	                display: 'block',
	                position: 'relative',
	                top: this.state.slideIndex === index ? -10 : 0,
	                height: this.state.imgHeight,
	                boxShadow: '2px 8px 5px rgba(0, 0, 0, 0.5)',
	              }}
	            >
	              <img
	                src={J05}
	                alt=""
	                style={{ width: '50%',height:'90%',verticalAlign: 'top' }}
	                onLoad={() => {
	                  // fire window resize event to change height
	                  window.dispatchEvent(new Event('resize'));
	                  //this.setState({ imgHeight: 'auto' });
	                }}
	              />
	            </a>
	          ))}
	        </Carousel>
	      </WingBlank>
	      </div>
	      <button className="j-bu" onClick={this.go.bind(this)}>去购买</button>
        </section>
      </div>
    )
  }
   componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
}

export default Chaopin;