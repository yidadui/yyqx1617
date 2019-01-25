import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Footer from './Footer';
import '../styles/Wode.css';
import IScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';





class Wode extends Component {

  componentDidMount(){
  	var myscroll=new IScroll('section',{
  		click:true,
    	vscrollbars: false,
    	mouseWheel: true,
  	})

  }
  render() {
    return (
      <div className="Wode">
        <header className='z-my'>
            <span>我的</span>
            <b>设置</b>
        </header>
        <section className='z-sec'>
            <div className='z-center'>
                <nav>
                  <NavLink to="/login" className="z-login">
                    <span className="iconfont">&#xe604;</span>
                    <span>登陆</span>
                  </NavLink>
                </nav>
                <h4>我的服务</h4>
                <div className='z-serve'>
                  <NavLink to="/city" className="z-fuwu">
                    <span className="iconfont">&#xe604;</span>
                    <span>商城订单</span>
                  </NavLink>
                  <NavLink to="/cart" className="z-fuwu">
                    <span className="iconfont">&#xe604;</span>
                    <span>购物车</span>
                  </NavLink>
                  <NavLink to="/kefu" className="z-fuwu">
                    <span className="iconfont">&#xe604;</span>
                    <span>穿衣顾问</span>
                  </NavLink>
                  <NavLink to="/gaizao" className="z-fuwu">
                    <span className="iconfont">&#xe604;</span>
                    <span>型男改造</span>
                  </NavLink>
                </div>
                <h4>我的工具</h4>


                <div className='z-tolls'>
                    <NavLink to="/city" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>会员中心</span>
                      </NavLink>
                      <NavLink to="/cart" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>优惠券</span>
                      </NavLink>
                      <NavLink to="/kefu" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>收藏</span>
                      </NavLink>
                      <NavLink to="/gaizao" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>消息</span>
                      </NavLink>
                      <NavLink to="/gaizao" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>积分商城</span>
                      </NavLink>
                      <NavLink to="/gaizao" className="z-fuwu">
                        <span className="iconfont">&#xe604;</span>
                        <span>邀请码</span>
                      </NavLink>

                </div>

            </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Wode;
