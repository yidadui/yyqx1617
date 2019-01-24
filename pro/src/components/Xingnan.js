import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../styles/Xingnan.css';
import J10 from '../img/j10.png';
import J11 from '../img/j11.png';
import J12 from '../img/j12.png';
class Xingnan extends Component {
	gai(){
		this.props.history.push('/dapei')
	}
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
        	<div>
        		<div className="j-x1">
        			<h1>致力于提升中国男士穿衣品味</h1>        			
        		</div>
        		<p>第三期我们抱着一颗勇敢的心,</p>
        		<p>就向“直男中的战斗机”</p>
        		<p>--IT男发起了挑战!</p>
        		<img src={J10}/>
        		<p>改造活动还在继续征集</p>
        		<p>大家转发我们的文章到朋友圈</p>
        		<p>并截图发至此公众号</p>
        		<p>就可以参与抽取了哦~</p>
        		<p>话不多说,改造开始~</p>
        		<p>第一位改造用户</p>
        		<p>年龄:29</p>
        		<p>程序猿</p>
        		<img className="j-img1" src={J11}/>
        		<p>每天只顾着加班敲代码</p>
        		<p>改造前后形象对比</p>
        		<img className="j-img1" src={J12}/>
        		<button onClick={this.gai.bind(this)}>立即参加型男改造</button>
        	</div>
        </section>
      </div>
    )
  }
}

export default Xingnan;