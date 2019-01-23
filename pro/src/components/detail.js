import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import '../styles/detail.css';
import $ from 'jquery';
import Swiper from 'swiper';
import '../styles/swiper-3.4.2.min.css';
class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:0,
    };
  }
  render(){
    return(
      <div className="ld-detail">
      <header></header>
      <strong>购物车</strong><b>上一页</b>
      <section>
      <div className="swiper-container">
    <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="https://cbu01.alicdn.com/img/ibank/2018/536/096/8856690635_2020559225.220x220.jpg"/></div>
        <div className="swiper-slide"><img src="https://cbu01.alicdn.com/img/ibank/2016/892/539/3151935298_325822316.220x220.jpg"/></div>
        <div className="swiper-slide"><img src="https://cbu01.alicdn.com/img/ibank/2016/249/362/2934263942_1229400652.220x220.jpg"/></div>
        <div className="swiper-slide"><img src="https://cbu01.alicdn.com/img/ibank/2017/643/950/4765059346_1998206030.220x220.jpg"/></div>
    </div>
    <div className="swiper-scrollbar" id="swiper-scrollbar"></div>
</div>
    <div className="detail-msg">
    <p>大声大声道任解放军的森林风景都是浪费大撒旦撒打算</p>
    <h3>￥279.00</h3>
    </div>
    <div className="detail-box">
    <h4>图文详情<span>(长按查看大图)</span></h4>
    <div className="detail-pic">
    <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M01/0E/01/Cg-4V1RmteiIPCJ2ABhdJ7cvn5kAARVKALlrg8AGF0_817.jpg"/>
    <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M06/00/04/Cg-4V1Rqs2KIQfZAAAhJpvudfNEAARdwQPUi-kACEm-239.jpg"/>
    <img src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g3/M02/01/03/Cg-4V1RsTDWIGQMdAARf0dO80kIAARhfQCXjQ8ABF_p913.jpg"/>
    </div>
    </div>
      </section>
      <footer>
      <div className="footer-left">
      <div className="f-xihuan">喜欢</div>
      <div className="f-fff">|</div>
      <div className="f-zhuanfa">转发</div>
      </div>
      <NavLink to="/home" className="footer-right">去淘宝购买</NavLink>
      </footer>
      </div>
    )
  }
  componentDidMount(){
    var _this=this;
    $('section').on('scroll',function(){
      if(this.scrollTop>400){
        if(_this.state.show==0){
          console.log(11);
            $('.ld-detail header').stop().fadeIn("normal",function(){
              _this.setState({show:1});
            });
        }
      }else{
        if(_this.state.show){
          $('.ld-detail header').stop().fadeOut("normal",function(){
              _this.setState({show:0});
          });
        }
      }
    })
      var mySwiper = new Swiper ('.swiper-container', {
      pagination:{
        el: '.swiper-pagination',
      },
      effect:"fade",
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  }
}
export default Detail;
