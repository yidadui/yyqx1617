import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import '../styles/Footer.css';
import '../styles/iconfont.css';
class Footer extends React.Component {
  render() {
    return (

      <div className="Footer">




      	<footer>

	        <div className="foo">
		        <NavLink to="/home" className="jiao">
			        <span className="iconfont">&#xe60c;</span>
			        <span>首页</span>
		        </NavLink>
		        <NavLink to="/danpin" className="jiao">
		        	<span className="iconfont">&#xe609;</span>
			        <span>单品</span>
		        </NavLink>
		        <NavLink to="/dapei" className="jiao">
		        	<span className="iconfont">&#xe631;</span>
			        <span>搭配</span>
		        </NavLink>
		        <NavLink to="/wode" className="jiao">
		        	<span className="iconfont">&#xe519;</span>
			        <span>我的</span>
		        </NavLink>

		      </div>

        </footer>

      </div>

    );
  }
}
export default Footer;
