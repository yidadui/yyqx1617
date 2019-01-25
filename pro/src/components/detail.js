import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';
import '../styles/detail.css';
import $ from 'jquery';
import Swiper from 'swiper';
import '../styles/swiper-3.4.2.min.css';
import  Action from "../redux/Action";
import  Store from "../redux/Store";
class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:0,
    };
  }
  atl(i){
      Store.dispatch(Action.atl(i));
    alert("添加成功");
  }
  goback(){
      this.props.history.goBack();
  }
  gocart(){
      this.props.history.push("/Cart");
  }
  render(){
    var _this=this;
    return(
      <div className="ld-detail">
      <header></header>
      <strong><span className="iconfont" onClick={this.gocart.bind(this)}>&#xe503;</span></strong><b onClick={this.goback.bind(this)}>&lt;</b>
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
      <span className="footer-right" onClick={_this.atl.bind(_this,_this.props.match.params.id)}>加入购物车</span>
      </footer>
      </div>
    )
  }
  componentDidMount(){
    var _this=this;
    $('section').on('scroll',function(){
      if(this.scrollTop>400){
            $('.ld-detail header').stop().fadeIn("normal",function(){
              _this.setState({show:1});
            });
      }else{
          $('.ld-detail header').stop().fadeOut("normal",function(){
              _this.setState({show:0});
          });
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

export default withRouter(Detail);
